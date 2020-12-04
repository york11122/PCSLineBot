const w = require("./data/無羽.js");
const e = require("./data/E夢.js");
const h = require("./data/煌.js");
const _ = require("underscore");

class RecommendObj {
    constructor(prop) {
        this.character = prop.character.toString()
        this.rank = prop.rank.toString()
        this.star_weapon = prop.star_weapon.toString()
        this.memo = prop.memo.toString() || " "
        this.from = prop.from.toString()
    }
}

//煌靈
class Huangling {
    constructor(rank_recommend_data) {
        this.rank_recommend_data = rank_recommend_data
    }

    getRecommend (character) {
        const result = _.filter(this.rank_recommend_data, function (i) {
            return i["名稱"].indexOf(character) > -1;
        })
        const RecommendResult = []
        result.forEach(item => RecommendResult.push(new RecommendObj({ from: '煌靈', character: item["名稱"], rank: item["建議RANK"], star_weapon: item["建議星數/專武等級"], memo: item["說明"] })))
        return RecommendResult
    }
}

//E夢
class Emeng {
    constructor(rank_recommend_data) {
        this.rank_recommend_data = rank_recommend_data
    }

    getRecommend (character) {
        const result = _.filter(this.rank_recommend_data, function (i) {
            return i["角色名"].indexOf(character) > -1;
        })
        const RecommendResult = []
        result.forEach(item => RecommendResult.push(new RecommendObj({ from: 'E夢', character: item["角色名"], rank: item["本次推薦"], star_weapon: item["星專"], memo: item["升Rank短評"] })))
        return RecommendResult
    }
}

//無羽
class wuyu {
    constructor(rank_recommend_data) {
        this.rank_recommend_data = rank_recommend_data
    }

    getRecommend (character) {
        const result = _.filter(this.rank_recommend_data, function (i) {
            return i["名稱"].indexOf(character) > -1;
        })
        const RecommendResult = []
        result.forEach(item => RecommendResult.push(new RecommendObj({ from: '無羽', character: item["名稱"], rank: item["Rank"], star_weapon: item["星級"] + '星' + item["專武等級"], memo: item["個人說明欄"] })))
        return RecommendResult
    }
}

class Recommend {

    constructor(type) {
        switch (type) {
            case '煌靈':
                this.recommend = new Huangling(h);
                break;
            case 'E夢':
                this.recommend = new Emeng(e);
                break;
            case '無羽':
                this.recommend = new wuyu(w);
                break;
            default:
                break;
        }
    }

    getRecommend (character) {
        return this.recommend.getRecommend(character);
    };
}

module.exports = Recommend


