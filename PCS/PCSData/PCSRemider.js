const axios = require("axios");
const cheerio = require("cheerio");
const _ = require("underscore");
const { promisify } = require("util");
const redis = require('redis');
const PCSWikiEvent = require('./PCSWikiEvent')
const REDIS_URL = ""


class PCSRemider {
    constructor() {
    }
    async setRemider (line_user_id, campaign_name, type) {

        const client = redis.createClient(process.env.REDIS_URL || REDIS_URL); // this creates a new client
        const getAsync = promisify(client.get).bind(client);
        const setAsync = promisify(client.set).bind(client);

        var remiders = await getAsync("Remiders")
        if (remiders === null) {
            remiders = "[]"
        }
        var data = JSON.parse(remiders)
        const events = await PCSWikiEvent.getData()
        const currentDate = new Date(new Date().toLocaleString({ timeZone: 'Asia/Taipei' }))
        const remideEvent = _.filter(events, item => { return item.campaign_name === campaign_name && new Date(item.end_time) >= currentDate })
        var result = null
        if (remideEvent.length > 0) {

            result = remideEvent[0]
            result.line_user_id = line_user_id
            result.type = type

            let r = _.findWhere(data, result)
            data.push(result)
            if (!r)
                await setAsync("Remiders", JSON.stringify(data))
        }
        client.quit()
        return result
    }

    async getRemider (type) {

        const client = redis.createClient(process.env.REDIS_URL || REDIS_URL); // this creates a new client
        const getAsync = promisify(client.get).bind(client);
        const setAsync = promisify(client.set).bind(client);

        var remiders = await getAsync("Remiders")
        if (remiders === null) {
            remiders = "[]"
        }
        var data = JSON.parse(remiders)

        const currentDate = new Date()
        var remideEvents = []
        var temp = []

        const compreDate = new Date(new Date(currentDate).toLocaleString({ timeZone: 'Asia/Taipei' }))
        compreDate.setTime(compreDate.getTime() + (8.5 * 60 * 60 * 1000))
        if (type === "start")
            remideEvents = _.filter(data, item => {
                if (new Date(item.start_time) <= compreDate && item.type === "start") return item
                else
                    temp.push(item)
            })
        else
            remideEvents = _.filter(data, item => {
                if (new Date(item.end_time) <= compreDate && item.type === "end") return item
                else
                    temp.push(item)
            })

        var result = null
        if (remideEvents.length > 0) {

            result = remideEvents
            await setAsync("Remiders", JSON.stringify(temp))
        }
        client.quit()
        return result
    }
}


module.exports = PCSRemider