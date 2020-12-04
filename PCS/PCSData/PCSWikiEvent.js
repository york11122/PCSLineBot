const axios = require("axios");
const _ = require("underscore");
const url = "https://pcredivewiki.tw/static/data/event.json"
const timezone = { timeZone: 'Asia/Taipei' }

class PCSWikiEvent {
    constructor() {
    }

    async getCurrentEvent () {
        const currentDate = new Date(new Date().toLocaleString(timezone))
        return _.filter(await await PCSWikiEvent.getData(), function (v) {
            return new Date(v.end_time) >= currentDate && new Date(v.start_time) <= currentDate
        })
    }

    async getAboutToStartEvent () {
        const currentDate = new Date(new Date().toLocaleString(timezone))
        return _.filter(await PCSWikiEvent.getData(), function (v) {
            return new Date(v.end_time) >= currentDate && new Date(v.start_time) >= currentDate
        })
    }

    async getStartEvent () {
        return _.filter(await PCSWikiEvent.getData(), function (v) {
            return PCSWikiEvent.isSameDay(new Date(v.start_time), new Date(new Date().toLocaleDateString(timezone)))
        })
    }

    async getNearlyEndEvent () {
        const currentDate = new Date()
        const tomorrow = new Date(currentDate)
        tomorrow.setDate(tomorrow.getDate() + 1)

        return _.filter(await PCSWikiEvent.getData(), function (v) {
            return PCSWikiEvent.isSameDay(new Date(v.end_time), new Date(tomorrow.toLocaleDateString(timezone)))
        })
    }

    async getDungentNearlyStart () {
        const currentDate = new Date()
        const twodaylater = new Date(currentDate)
        twodaylater.setDate(twodaylater.getDate() + 2)
        return _.filter(await PCSWikiEvent.getData(), function (v) {
            return PCSWikiEvent.isSameDay(new Date(v.start_time), new Date(twodaylater.toLocaleDateString(timezone))) && v.campaign_name.includes('「地下城」 2倍掉落')
        })
    }

    static async getData () {
        const res = await axios.get(url)
        return res.data
    }

    static isSameDay (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }
}

module.exports = PCSWikiEvent