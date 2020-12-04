class SetRemiderMessage {
    constructor() {
        this.message = {
            type: "bubble",
            body: {}
        }
    }
    getMessage (line_user, campaign_name, type) {
        this.message.body = {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "image",
                                    "url": line_user.pictureUrl,
                                    "aspectMode": "cover",
                                    "size": "full"
                                }
                            ],
                            "cornerRadius": "100px",
                            "width": "72px",
                            "height": "72px"
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "text",
                                    "contents": [
                                        {
                                            "type": "span",
                                            "text": line_user.displayName,
                                            "weight": "bold",
                                            "color": "#000000"
                                        },
                                        {
                                            "type": "span",
                                            "text": "     "
                                        },
                                        {
                                            "type": "span",
                                            "text": "設定提醒"
                                        }
                                    ],
                                    "size": "sm",
                                    "wrap": true
                                },
                                {
                                    "type": "text",
                                    "text": campaign_name,
                                    "size": "sm",
                                    "wrap": true,
                                    "margin": "md"
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [
                                        {
                                            "type": "text",
                                            "text": type === "end" ? "將於活動結束前30分提醒" : "將於活動開始前30分提醒",
                                            "size": "sm",
                                            "color": "#bcbcbc",
                                            "wrap": true
                                        }
                                    ],
                                    "spacing": "sm",
                                    "margin": "md"
                                }
                            ]
                        }
                    ],
                    "spacing": "xl",
                    "paddingAll": "20px"
                }
            ],
            "paddingAll": "0px"
        }
        return this.message
    }
}

module.exports = SetRemiderMessage