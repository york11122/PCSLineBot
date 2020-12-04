class PartyStageQuickMessageReply {
    constructor() { }
    getReplyMessage () {
        return {
            "type": "text",
            "text": "查戰隊戰階段",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "一階段",
                            "data": "QParty:1",
                            "text": "一階段"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "二階段",
                            "data": "QParty:2",
                            "text": "二階段"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "三階段",
                            "data": "QParty:3",
                            "text": "三階段"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "四階段",
                            "data": "QParty:4",
                            "text": "四階段"
                        }
                    }
                ]
            }
        }
    }
}
module.exports = PartyStageQuickMessageReply