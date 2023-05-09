// Module: Arch
// Description: Search for packages on the Arch User Repository
// Usage: /arch <package>

import axios from 'axios'
import { Markup } from 'telegraf'

export default async (ctx) => {
    const command = ctx.message.text.split(' ')[1]
    if (!command) {
        ctx.reply('Please provide a command to search for.')
        return
    }
    try {
        const response = await axios.get(`https://aur.archlinux.org/rpc/?v=5&type=search&arg=${command}`)
        const data = response.data
        const results = data.results
        const resultsText = results.map((result) => {
            return `<b>${result.Name}</b>\n<i>${result.Description}</i>\n<a href="https://aur.archlinux.org/packages/${result.Name}">View on AUR</a>`
        }).join('\n\n')
        ctx.replyWithHTML(`<b>Results for ${command}</b>\n\n${resultsText}`, Markup.inlineKeyboard([
            Markup.button.url('🔍 Search', `https://www.google.com/search?q=${command}`)
        ]))
    } catch (error) {
        ctx.reply('No results found.')
    }
}
