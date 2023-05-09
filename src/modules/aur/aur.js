// Module: AUR
// Description: Displays information about an AUR package.
// Usage: /aur <package>

import axios from 'axios'
import { Markup } from 'telegraf'

export default async (ctx) => {
    const aurPackage = ctx.message.text.split(' ')[1]
    if (!aurPackage) {
        ctx.reply('Please provide a package to search for.')
        return
    }

    try {
        const response = await axios.get(`https://aur.archlinux.org/rpc/?v=5&type=info&arg[]=${aurPackage}`)
        const data = response.data
        const result = data.results[0]
        const resultText = `<b>${result.Name}</b>\n<i>${result.Description}</i>\n\n<b>Dependencies:</b> ${result.Depends}\n<b>Check Dependencies:</b> ${result.CheckDepends ? result.CheckDepends : 'N/A'}\n<b>Make Dependencies:</b> ${result.MakeDepends ? result.MakeDepends : 'N/A'}\n<b>Provides:</b> ${result.Provides}\n<b>Groups:</b> ${result.Groups ? result.Groups : 'N/A'}\n<b>Version:</b> ${result.Version}\n<b>Maintainer:</b> ${result.Maintainer}\n<b>Last Updated:</b> ${result.LastModified}\n<b>Conflicts:</b> ${result.Conflicts}\n<b>URL:</b> ${result.URL}`
        ctx.replyWithHTML(resultText, Markup.inlineKeyboard([
            Markup.button.url('🔍 Search', `https://www.google.com/search?q=${aurPackage}`)
        ]))
    }
    catch (error) {
        ctx.reply('No results found.')
    }

}
