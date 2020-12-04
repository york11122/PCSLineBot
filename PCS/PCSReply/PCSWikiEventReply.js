
const PCSWikiEvent = require('../PCSData/PCSWikiEvent')
const PCSFlexMessage = require('../PCSFlexMessage/PCSFlexMessage')
let pcs_message = new PCSFlexMessage()

class PCSWikiEventReply {
    constructor() {
        this.pcs_wiki = new PCSWikiEvent();
        this.result = []
        this.titleString = ""
        this.type = ""
    }
    async getReplyMessage (type) {
        switch (type) {
            case 'CurrentEvent':
                this.result = await this.pcs_wiki.getCurrentEvent()
                this.titleString = "查詢: 進行中"
                this.type = type
                break;
            case 'AboutToStartEvent':
                this.result = await this.pcs_wiki.getAboutToStartEvent()
                this.type = type
                this.titleString = "查詢: 即將開始"
                break;
            case 'StartEvent':
                this.result = await this.pcs_wiki.getStartEvent()
                this.type = type
                this.titleString = "提醒: 今日開始"
                break;
            case 'NearlyEndEvent':
                this.result = await this.pcs_wiki.getNearlyEndEvent()
                this.type = type
                this.titleString = "提醒: 明日結束"
                break;
            case 'DungentNearlyStart':
                this.result = await this.pcs_wiki.getDungentNearlyStart()
                this.type = type
                this.titleString = "提醒: 記得卡地下城"
                break;
            default:
                break;
        }
        return pcs_message.wikiMessage(this.result, this.titleString, this.type)
    }
}

module.exports = PCSWikiEventReply