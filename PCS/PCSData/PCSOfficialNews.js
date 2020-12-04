const axios = require("axios");
const cheerio = require("cheerio");
const _ = require("underscore");
const { promisify } = require("util");
const redis = require('redis');
const url = "http://www.princessconnect.so-net.tw/news"
const REDIS_URL = ""
class PCSOfficialNews {
    constructor() {
    }

    async getAllOfficialNews () {
        return await PCSOfficialNews.getData()
    }

    async getOfficialNewsForPush () {
        const client = redis.createClient(process.env.REDIS_URL || REDIS_URL); // this creates a new client
        const getAsync = promisify(client.get).bind(client);
        const setAsync = promisify(client.set).bind(client);

        const officialNews = await PCSOfficialNews.getData()
        const last_push_date = await getAsync("last_push_date")
        const last_push_id = await getAsync("last_push_id")
        var isBreak = false;
        const resultData = _.filter(officialNews, function (v) {
            if (v.news_id === last_push_id) { isBreak = true }
            if (isBreak) return false
            return new Date(v.news_publish_time) >= new Date(last_push_date)
        })
        if (resultData.length > 0) {
            await setAsync("last_push_date", resultData[0].news_publish_time)
            await setAsync("last_push_id", resultData[0].news_id)
        }
        client.quit()
        return resultData
    }

    static async getData () {
        const res = await axios.get(url)
        const $ = cheerio.load(res.data)
        var dt = $(".news_con")
        var dataObjs = [];
        var obj = {}
        dt.find('dl > dd > a').each(function (index, element) {
            obj = {
                news_id: $(element).attr('href').split('/')[3],
                news_title: $(element).attr('title'),
                news_publish_time: "",
                news_href: $(element).attr('href'),
                type: ""
            }
            dataObjs.push(obj)
        });

        dt.find('dl > dt').each(function (index, element) {
            dataObjs[index].news_publish_time = $(element).contents().first().text().trim()
            dataObjs[index].type = $(element).children('span').text()
        });

        return dataObjs
    }
}


module.exports = PCSOfficialNews