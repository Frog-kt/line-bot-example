module.exports = MenueList = async (client, event) => {
	return await client.replyMessage(event.replyToken, {
		type: "template",
		altText: "this is a carousel template",
		template: {
			type: "carousel",
			columns: [
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pasta.jpeg",
					title: "パスタ",
					text: "パスタ",
					actions: [
						{
							type: "message",
							label: "注文",
							text: "注文",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pizza.jpeg",
					title: "ピザ",
					text: "ピザ",
					actions: [
						{
							type: "message",
							label: "注文する",
							text: "注文する",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/steak.jpeg",
					title: "ステーキ",
					text: "ステーキ",
					actions: [
						{
							type: "message",
							label: "注文する",
							text: "注文する",
						},
					],
				},
			],
		},
	});
};

// module.exports = CMenueList;
