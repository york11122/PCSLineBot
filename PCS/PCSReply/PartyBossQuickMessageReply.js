class PartyBossQuickMessageReply {
    constructor() { }
    getReplyMessage (stage) {
        return {
            "type": "text",
            "text": "查" + stage + "階段boss",
            "quickReply": {
                "items": [
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "一王",
                            "data": "GParty:" + stage + ",1",
                            "text": stage + "階段" + "一王"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "二王",
                            "data": "GParty:" + stage + ",2",
                            "text": stage + "階段" + "二王"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "三王",
                            "data": "GParty:" + stage + ",3",
                            "text": stage + "階段" + "三王"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "四王",
                            "data": "GParty:" + stage + ",4",
                            "text": stage + "階段" + "四王"
                        }
                    },
                    {
                        "type": "action",
                        "action": {
                            "type": "postback",
                            "label": "五王",
                            "data": "GParty:" + stage + ",5",
                            "text": stage + "階段" + "五王"
                        }
                    }
                ]
            }
        }
    }
}
module.exports = PartyBossQuickMessageReply