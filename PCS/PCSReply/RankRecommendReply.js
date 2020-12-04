const Recommend = require('../PCSData/Recommend')
const PCSFlexMessage = require('../PCSFlexMessage/PCSFlexMessage')
let pcs_message = new PCSFlexMessage()

class RankRecommendReply {
    constructor() {
        this.result = []
    }
    getReplyMessage (character) {
        this.result = new Recommend('E夢').getRecommend(character)
            .concat(new Recommend('無羽').getRecommend(character))
            .concat(new Recommend('煌靈').getRecommend(character))
        return pcs_message.RecommendMessage(this.result)
    }
}

module.exports = RankRecommendReply