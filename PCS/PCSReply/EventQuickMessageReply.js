class EventQuickMessageReply {
    constructor() { }
    getReplyMessage () {
        return {
            "type": "text",
            "text": "查詢活動",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "進行中活動",
                            "data": "WIKI:CurrentEvent",
                            "text": "進行中活動"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "預計活動",
                            "data": "WIKI:AboutToStartEvent",
                            "text": "預計活動"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "官方消息",
                            "data": "OFFICIAL:ALL",
                            "text": "官方消息"
                        }
                    }
                ]
            }
        }
    }
}
module.exports = EventQuickMessageReply