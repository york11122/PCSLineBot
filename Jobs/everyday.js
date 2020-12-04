const linebot = require('linebot');
const config = require('../config')
const groupid = "C42a3106fc821a6d98a4ba47784184bbf"
const pcsLineBot = require('../PCS/PCSLineBot')
const pcs = new pcsLineBot()

var bot = linebot(config.linebot)

pcs.getReplyInstance('PCSWiki').getReplyMessage('StartEvent').then(res => bot.push(groupid, res).then(console.log('今日開始活動推播完成')))

pcs.getReplyInstance('PCSWiki').getReplyMessage('NearlyEndEvent').then(res => bot.push(groupid, res).then(console.log('即將結束活動推播完成')))

pcs.getReplyInstance('PCSWiki').getReplyMessage('DungentNearlyStart').then(res => bot.push(groupid, res).then(console.log('地下城兩倍提示完成')))

