
const linebot = require('linebot');
const axios = require("axios");
const config = require('../config')
const pcsLineBot = require('../PCS/PCSLineBot')
const pcs = new pcsLineBot()

var bot = linebot(config.linebot)

//確認官網最新消息
pcs.getReplyInstance('PCSOfficialNews').getReplyMessage('for_push').then(res => {
  bot.push("C42a3106fc821a6d98a4ba47784184bbf", res).then(console.log('Job:官網消息推播完成'))
})

//推播提醒
pcs.getReplyInstance('Reminder').getReplyMessageForPushRemind('start').then(res => {
  if (res === null) return
  bot.push(res.id, res.msg).then(console.log('Job:推播提醒'))
})

pcs.getReplyInstance('Reminder').getReplyMessageForPushRemind('end').then(res => {
  if (res === null) return
  bot.push(res.id, res.msg).then(console.log('Job:推播提醒'))
})
//呼叫自己避免heroku關機
axios.get('https://lbota.herokuapp.com/').catch(err => console.log('hit self'))
