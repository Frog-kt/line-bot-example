module.exports = GenreList = async (client, event) => {
	return await client.replyMessage(event.replyToken, {
		type: "template",
		altText: "this is a carousel template",
		template: {
			type: "carousel",
			columns: [
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pasta.jpeg",
					title: "麺類",
					text: "パスタ、うどん、そば",
					actions: [
						{
							type: "message",
							label: "詳しく見る",
							text: "詳しく見る",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/pizza.jpeg",
					title: "イタリアン",
					text: "スパゲティ、サラダ",
					actions: [
						{
							type: "message",
							label: "詳しく見る",
							text: "詳しく見る",
						},
					],
				},
				{
					thumbnailImageUrl:
						"https://vos.line-scdn.net/bot-designer-template-images/reservation/steak.jpeg",
					title: "肉",
					text: "ステーキ、ハンバーグ、焼肉",
					actions: [
						{
							type: "message",
							label: "詳しく見る",
							text: "詳しく見る",
						},
					],
				},
			],
		},
	});
};

// module.exports = CSStoreList;
