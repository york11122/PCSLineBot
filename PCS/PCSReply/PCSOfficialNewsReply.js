
const PCSOfficialNews = require('../PCSData/PCSOfficialNews')
const PCSFlexMessage = require('../PCSFlexMessage/PCSFlexMessage')
let pcs_message = new PCSFlexMessage()

class PCSOfficialNewsReply {
    constructor() {
        this.pcs_official = new PCSOfficialNews();
        this.result = []
        this.titleString = ""
    }
    async getReplyMessage (type) {

        switch (type) {
            case 'all':
                this.result = await this.pcs_official.getAllOfficialNews()
                this.titleString = "查詢: 官網消息"
                break;
            case 'for_push':
                this.result = await this.pcs_official.getOfficialNewsForPush()
                this.titleString = "推播: 最新消息"
                break;
            default:
                break;
        }
        return pcs_message.OfficialNewsMessage(this.result, this.titleString)
    }
}
module.exports = PCSOfficialNewsReply