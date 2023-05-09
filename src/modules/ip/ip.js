// Module to get information about an IP address from ip-api.com
// the ip address is passed as /ip <ip>

import axios from 'axios'
import { Markup } from 'telegraf'

export default async (ctx) => {
    const ip = ctx.message.text.split(' ')[1]
    if (!ip) {
        ctx.reply('Please provide an IP address to search for.')
        return
    }
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`)
        const data = response.data
        const resultText = `<b>IP:</b> ${data.query}\n<b>Country:</b> ${data.country}\n<b>Country Code:</b> ${data.countryCode}\n<b>Region:</b> ${data.region}\n<b>Region Name:</b> ${data.regionName}\n<b>City:</b> ${data.city}\n<b>ZIP:</b> ${data.zip}\n<b>Latitude:</b> ${data.lat}\n<b>Longitude:</b> ${data.lon}\n<b>Timezone:</b> ${data.timezone}\n<b>ISP:</b> ${data.isp}\n<b>Organization:</b> ${data.org}\n<b>AS:</b> ${data.as}`
        ctx.replyWithHTML(resultText, Markup.inlineKeyboard([
            Markup.button.url('🔍 Search', `https://www.google.com/search?q=${ip}`)
        ]))
    } catch (error) {
        ctx.reply('No results found.')
    }
}