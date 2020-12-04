class OfficialNewsMessage {
    constructor(dataList) {
        this.dataList = dataList
        this.message = {
            type: "carousel",
            contents: {}
        }
    }
    getMessage (titleString) {
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
                            "text": titleString,
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
                                            "text": item.news_title,
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
                                            "text": "發佈",
                                            "size": "sm",
                                            "color": "#aaaaaa",
                                            "flex": 0
                                        },
                                        {
                                            "type": "text",
                                            "text": item.news_publish_time,
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
                                            "text": "類型",
                                            "size": "sm",
                                            "color": "#aaaaaa",
                                            "flex": 0
                                        },
                                        {
                                            "type": "text",
                                            "text": item.type || " ",
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
                "footer": {
                    "type": "box",
                    "layout": "horizontal",
                    "spacing": "sm",
                    "contents": [
                        {
                            "type": "button",
                            "style": "primary",
                            "color": "#905c44",
                            "action": {
                                "type": "uri",
                                "label": "前往",
                                "uri": "http://www.princessconnect.so-net.tw/" + item.news_href
                            },
                            "height": "sm"
                        },
                    ]
                }
            }
        ))
        this.message.contents = contents
        return this.message
    }
}
module.exports = OfficialNewsMessage