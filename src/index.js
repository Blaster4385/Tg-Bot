import { Telegraf } from 'telegraf'
import help from './modules/help/help.js'
import neofetch from './modules/neofetch/neofetch.js'
import meaning from './modules/meaning/meaning.js'
import arch from './modules/arch/arch.js'
import aur from './modules/aur/aur.js'

const bot = new Telegraf(process.env.BOT_TOKEN)

const welcomeText = `
<b>Hey there! Welcome to TheTablaster's bot!</b>

<b>This bot is made by TheTablaster in JavaScript using the Telegraf.js library.</b>
    `

bot.start((ctx) => ctx.replyWithHTML(welcomeText))

bot.command('help', help)

bot.command('neofetch', neofetch)

bot.command('meaning', meaning)

bot.command('arch', arch)

bot.command('aur', aur)

bot.launch()