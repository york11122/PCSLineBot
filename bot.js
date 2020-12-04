const linebot = require('linebot');
const config = require('./config')
const pcsLineBot = require('./PCS/PCSLineBot')
const pcs = new pcsLineBot()
var bot = linebot(config.linebot)

try {
    bot.on('message', async function (event) {
        if (event.message.text.split('查活動').length > 1) {
            event.reply(await pcs.getReplyInstance('Event').getReplyMessage())
            return
        }
        if (event.message.text.split('查角色').length > 1) {
            event.reply(await pcs.getReplyInstance('RankRecommend').getReplyMessage(event.message.text.split('查角色')[1].trim()))
            return
        }

        if (event.message.text.split('查戰隊戰').length > 1) {
            event.reply(await pcs.getReplyInstance('PartyStageQuickMessage').getReplyMessage())
            return
        }
    });

    bot.on('postback', async function (event) {
        const string = event.postback.data.split(':')
        if (string[0] === "WIKI") {
            event.reply(await pcs.getReplyInstance('PCSWiki').getReplyMessage(string[1]))
            return
        }
        if (string[0] === "OFFICIAL") {
            event.reply(await pcs.getReplyInstance('PCSOfficialNews').getReplyMessage('all'))
            return
        }

        if (string[0] === "REMIND") {
            const data = await bot.getUserProfile(event.source.userId)
            if (data.message === "Not found") {
                event.reply({ "type": "text", "text": "請先加機器人好友" })
                return
            }
            event.reply(await pcs.getReplyInstance('Reminder').getReplyMessageForSetRemind(data, event.source.userId, string[1].split(',')[1], string[1].split(',')[0]))
            return
        }

        if (string[0] === "QParty") {
            event.reply(await pcs.getReplyInstance('PartyBossQuickMessage').getReplyMessage(string[1]))
            return
        }

        if (string[0] === "GParty") {
            const tt = string[1].split(',')
            event.reply(await pcs.getReplyInstance('PCSParty').getReplyMessage(tt[0], tt[1]))
            return
            retun
        }
    });

    bot.listen('/hook', process.env.PORT || 3000);
}
catch (err) { console.log(err) }