const axios = require("axios");
const _ = require("underscore");
const url = "https://pcrclanbattle.herokuapp.com/query/"
const timezone = { timeZone: 'Asia/Taipei' }

class PCSParty {
    constructor() {
    }

    async getParty (year, month, type, boss, isauto) {
        let data = await PCSParty.getData(year, month, type, boss, isauto)
        var resultObj = []
        data.forEach(item => {
            resultObj.push({
                title: "",
                score: item.score.toString(),
                damage: item.damage,
                author: item.author,
                type: item.auto === "True" ? "自動" : "手動",
                postURL: "https://pcrclanbattle.herokuapp.com/post/" + item.id,
                character: [
                    {
                        imgURL: "https://raw.githubusercontent.com/nathan60107/PCR_image/master/icon/1" + item.char[0] + "31.png",
                        detail: item.star[0] + ',r' + item.rank[0] //+ ',' + item.weapon[0]
                    },
                    {
                        imgURL: "https://raw.githubusercontent.com/nathan60107/PCR_image/master/icon/1" + item.char[1] + "31.png",
                        detail: item.star[1] + ',r' + item.rank[1] //+ ',' + item.weapon[1]
                    },
                    {
                        imgURL: "https://raw.githubusercontent.com/nathan60107/PCR_image/master/icon/1" + item.char[2] + "31.png",
                        detail: item.star[2] + ',r' + item.rank[2] //+ ',' + item.weapon[2]
                    }, {
                        imgURL: "https://raw.githubusercontent.com/nathan60107/PCR_image/master/icon/1" + item.char[3] + "31.png",
                        detail: item.star[3] + ',r' + item.rank[3] //+ ',' + item.weapon[3]
                    }
                    , {
                        imgURL: "https://raw.githubusercontent.com/nathan60107/PCR_image/master/icon/1" + item.char[4] + "31.png",
                        detail: item.star[4] + ',r' + item.rank[4] //+ ',' + item.weapon[4]
                    }
                ]
            })
        })

        return resultObj
    }

    static async getData (year, month, type, boss, isauto) {
        const res = await axios.post(url,
            "header=query&char=1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111&auto=" + isauto + "&year=" + year + "&month=" + month + "&stage=" + type + "&ordinal=" + boss, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "X-Requested-With": "XMLHttpRequest"
            }
        })
        return res.data
    }

}

module.exports = PCSParty