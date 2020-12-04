class GetRemiderMessage {
    constructor(dataList) {
        this.dataList = dataList
        this.message = {
            type: "carousel",
            contents: {}
        }
    }
    getMessage (type) {
        let contents = []
        this.dataList.forEach(item => contents.push(
            {
                "type": "bubble",
                "size": "mega",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                        {
                            "type": "text",
                            "text": item.type === "end" ? "結束前提醒" : "開始前提醒",
                            "weight": "bold",
                            "color": "#111111",
                            "size": "sm",
                            "align": "start",
                            "style": "normal"
                        },
                        {
                            "type": "separator",
                            "margin": "sm"
                        },
                        {
                            "type": "box",
                            "layout": "horizontal",
                            "margin": "md",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "資料來源",
                                    "size": "sm",
                                    "color": "#aaaaaa",
                                    "flex": 0
                                },
                                {
                                    "type": "text",
                                    "text": "官方網站",
                                    "color": "#111111",
                                    "size": "sm",
                                    "align": "end"
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "margin": "md",
                            "spacing": "sm",
                            "contents": [
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "活動",
                                            "size": "sm",
                                            "color": "#aaaaaa",
                                            "flex": 0
                                        },
                                        {
                                            "type": "text",
                                            "size": "sm",
                                            "color": "#111111",
                                            "align": "end",
                                            "text": item.campaign_name,
                                        }
                                    ],
                                    "margin": "none",
                                    "spacing": "none",
                                    "offsetEnd": "none"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "開始",
                                            "size": "sm",
                                            "color": "#aaaaaa",
                                            "flex": 0
                                        },
                                        {
                                            "type": "text",
                                            "text": item.start_time,
                                            "size": "sm",
                                            "color": "#111111",
                                            "align": "end"
                                        }
                                    ]
                                },

                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": "結束",
                                            "size": "sm",
                                            "color": "#aaaaaa",
                                            "flex": 0
                                        },
                                        {
                                            "type": "text",
                                            "text": item.end_time,
                                            "size": "sm",
                                            "color": "#111111",
                                            "align": "end"
                                        }
                                    ]
                                },

                            ]
                        }
                    ]
                },
            }
        ))

        this.message.contents = contents
        return this.message
    }
}

module.exports = GetRemiderMessage