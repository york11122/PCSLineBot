const PCSParty = require('../PCSData/PCSParty')
const PCSFlexMessage = require('../PCSFlexMessage/PCSFlexMessage')
let pcs_message = new PCSFlexMessage()

class PCSPartyReply {
    constructor() {
        this.pcs_party = new PCSParty();
        this.result = []
        this.titleString = ""
    }
    async getReplyMessage (type, boss) {
        let month = (new Date().getMonth() + 1).toString()
        var year = new Date().getFullYear().toString()
        year = year.substr(year.length - 2)
        this.result = await this.pcs_party.getParty(year, month, type, boss, '-1')
        if (this.result.length > 0) {
            return pcs_message.PartyMessage(this.result)
        }
        return { "type": "text", "text": "查無資料" }
    }
}

module.exports = PCSPartyReply