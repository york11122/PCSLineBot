const PCSRemider = require('../PCSData/PCSRemider')
const PCSFlexMessage = require('../PCSFlexMessage/PCSFlexMessage')
let pcs_message = new PCSFlexMessage()

class PCSRemiderReply {
    constructor() {
        this.pcs_remider = new PCSRemider()
        this.result = {}
    }
    async getReplyMessageForSetRemind (line_user, line_id, campaign_name, type) {
        this.result = this.pcs_remider.setRemider(line_id, campaign_name, type)
        if (this.result !== null) {
            return pcs_message.SetRemideMessage(line_user, campaign_name, type)
        }
        return {
            "type": "text",
            "text": "活動已結束"
        }
    }

    async getReplyMessageForPushRemind (type) {
        this.result = await this.pcs_remider.getRemider(type)
        if (this.result !== null) {
            return pcs_message.GetRemideMessage(this.result, type)
        }
        return null
    }
}

module.exports = PCSRemiderReply