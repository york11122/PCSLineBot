const RankRecommendReply = require('./PCSReply/RankRecommendReply')
const EventQuickMessageReply = require('./PCSReply/EventQuickMessageReply')
const PCSWikiEventReply = require('./PCSReply/PCSWikiEventReply')
const PCSOfficialNewsReply = require('./PCSReply/PCSOfficialNewsReply')
const PCSRemiderReply = require('./PCSReply/PCSRmiderReply')
const PCSPartyReply = require('./PCSReply/PCSPartyReply')
const PartyStageQuickMessageReply = require('./PCSReply/PartyStageQuickMessageReply')
const PartyBossQuickMessageReply = require('./PCSReply/PartyBossQuickMessageReply')

class PCSLineBot {
    constructor(type) {
        this.type = type
    }
    getReplyInstance (instance_type) {
        switch (instance_type) {
            case 'RankRecommend':
                return new RankRecommendReply()
            case 'Event':
                return new EventQuickMessageReply()
            case 'PCSWiki':
                return new PCSWikiEventReply()
            case 'PCSOfficialNews':
                return new PCSOfficialNewsReply()
            case 'Reminder':
                return new PCSRemiderReply()
            case 'PCSParty':
                return new PCSPartyReply()
            case 'PartyStageQuickMessage':
                return new PartyStageQuickMessageReply()
            case 'PartyBossQuickMessage':
                return new PartyBossQuickMessageReply()
            default:
                break;
        }
    }

}
module.exports = PCSLineBot


