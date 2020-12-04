const WikiMessage = require('./messages/WikiMessage')
const RecommendMessage = require('./messages/RecommendMessage')
const SetRemiderMessage = require('./messages/SetRemiderMessage')
const GetRemiderMessage = require('./messages/GetRemiderMessage')
const OfficialNewsMessage = require('./messages/OfficialNewsMessage')
const PartyMessage = require('./messages/PartyMessage')

class PCSFlexMessage {
    constructor() {
        this.message = {
            type: "flex",
            altText: "this is a flex message",
            contents: {}
        }
    }
    wikiMessage (data, title, type) {
        this.message.contents = new WikiMessage(data).getMessage(title, type)
        return this.message
    }

    RecommendMessage (data) {
        this.message.contents = new RecommendMessage(data).getMessage()
        return this.message
    }

    SetRemideMessage (line_user, campaign_name, type) {
        this.message.contents = new SetRemiderMessage().getMessage(line_user, campaign_name, type)
        return this.message
    }

    GetRemideMessage (data, type) {
        this.message.contents = new GetRemiderMessage(data).getMessage(type)
        return this.message
    }

    OfficialNewsMessage (data, title) {
        this.message.contents = new OfficialNewsMessage(data).getMessage(title)
        return this.message
    }

    PartyMessage (data) {
        this.message.contents = new PartyMessage(data).getMessage()
        return this.message
    }
}

module.exports = PCSFlexMessage
