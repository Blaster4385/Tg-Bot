import { Telegraf } from 'telegraf'
import help from './modules/help/help.js'

const bot = new Telegraf(process.env.BOT_TOKEN)

const welcomeText = `
<b>Hey there! Welcome to TheTablaster's bot!</b>

<b>This bot is made by TheTablaster in JavaScript using the Telegraf.js library.</b>
    `

bot.start((ctx) => ctx.replyWithHTML(welcomeText))

bot.command('help', help)

bot.launch()