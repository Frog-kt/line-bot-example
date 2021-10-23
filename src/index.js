"use strict";

const express = require("express");
const line = require("@line/bot-sdk");
const app = express();

const MenueList = require("./MenueList.js");
const StoreList = require("./StoreList.js");
const GenreList = require("./GenreList.js");

const PORT = process.env.PORT || 3000;

const config = {
	channelSecret: "2d3805f014e8dc8f06d71b070d108193",
	channelAccessToken:
		"fZz1IQ3H/wLYMj9qzOBNFeFoXdJJZ6wetDE93idscVDeBpeatcmRqm3hk+9K010LaPFFvu16AXf2kNCsCAuNiLz7N6h4Bxe6tjURouDAGAladtfz0eMNJbHVvX3RyvRYOiAkY5chAhl1WvfJXTL1BgdB04t89/1O/w1cDnyilFU=",
};

const client = new line.Client(config);

// ! ここから
app.post("/webhook", line.middleware(config), async (req, res) => {
	const event = req.body.events[0];
	console.log(event);

	const text = event.message.text;

	let result;

	if (text === "ジャンルで探す") {
		result = await GenreList(client, event);
	}

	if (text === "お店で探す") {
		result = await StoreList(client, event);
	}

	if (text === "メニューを見る") {
		result = await MenueList(client, event);
	}

	if (text === "注文") {
		result = await client.replyMessage(event.replyToken, {
			type: "template",
			altText: "注文を確定してもよろしいですか？",
			template: {
				type: "confirm",
				actions: [
					{
						type: "message",
						label: "はい",
						text: "はい",
					},
					{
						type: "message",
						label: "いいえ",
						text: "いいえ",
					},
				],
				text: "注文を確定してもよろしいですか？",
			},
		});
	}

	if (text === "はい") {
		result = await client.replyMessage(event.replyToken, {
			type: "text",
			text: "注文が完了しました。",
		});
	}

	if (text === "いいえ") {
		result = await client.replyMessage(event.replyToken, {
			type: "text",
			text: "注文がキャンセルされました。",
		});
	}

	if (text === "過去の注文") {
		result = await client.replyMessage(event.replyToken, {});
	}

	if (text === "その他") {
	}

	res.json(result);
});
// !ここまで

app.listen(PORT, console.log(`Server listning on port ${PORT}`));
