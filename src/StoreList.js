module.exports = StoreList = async (client, event) => {
	return await client.replyMessage(event.replyToken, {
		type: "template",
		altText: "this is a carousel template",
		template: {
			type: "carousel",
			columns: [
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pasta.jpeg",
					title: "パスタ のおいしいお店",
					text: "パスタ のおいしいお店",
					actions: [
						{
							type: "message",
							label: "メニューを見る",
							text: "メニューを見る",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pizza.jpeg",
					title: "ピザ のおいしいお店",
					text: "ピザ のおいしいお店",
					actions: [
						{
							type: "message",
							label: "メニューを見る",
							text: "メニューを見る",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/steak.jpeg",
					title: "ステーキ のおいしいお店",
					text: "ステーキ のおいしいお店",
					actions: [
						{
							type: "message",
							label: "メニューを見る",
							text: "メニューを見る",
						},
					],
				},
			],
		},
	});
};

// module.exports = CSStoreList;
