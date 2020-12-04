class WikiMessage {
    constructor(dataList) {
        this.dataList = dataList
        this.message = {
            type: "carousel",
            contents: {}
        }
    }
    getMessage (titleString, type) {
        let contents = []
        this.dataList.forEach(item => contents.push({
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
                        "align": "start"
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
                                "text": "蘭德索爾圖書館",
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
                                        "flex": 0,
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "size": "sm",
                                        "color": "#000093",
                                        "align": "end",
                                        "text": item.campaign_name
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
                                        "flex": 0,
                                        "weight": "bold"
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
                                        "flex": 0,
                                        "weight": "bold"
                                    },
                                    {
                                        "type": "text",
                                        "text": item.end_time,
                                        "size": "sm",
                                        "color": "#111111",
                                        "align": "end"
                                    }

                                ]
                            }
                        ]
                    }
                ]
            },
            "footer": (() => {
                if (type === 'CurrentEvent') {
                    return {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "sm",
                        "contents": [

                            {
                                "type": "button",
                                "style": "primary",
                                "color": "#905c44",
                                "action": {
                                    "type": "postback",
                                    "label": "結束提醒",
                                    "data": "REMIND:" + "end," + item.campaign_name,
                                    "text": item.campaign_name + " 結束前提醒"
                                },
                                "height": "sm"
                            },

                        ]
                    }
                }
                if (type === "AboutToStartEvent") {
                    return {
                        "type": "box",
                        "layout": "horizontal",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "button",
                                "style": "primary",
                                "color": "#905c44",
                                "action": {
                                    "type": "postback",
                                    "label": "開始提醒",
                                    "data": "REMIND:" + "start," + item.campaign_name,
                                    "text": item.campaign_name + " 開始前提醒"
                                },
                                "height": "sm"
                            },



                        ]
                    }
                }
                return {
                    "type": "box",
                    "layout": "vertical",
                    "contents": []
                }
            })()
        }))
        this.message.contents = contents
        return this.message
    }
}

module.exports = WikiMessage