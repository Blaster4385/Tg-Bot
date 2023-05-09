// Module: GitUser
// Description: Gets information about a GitHub user.
// Usage: /gituser <username>

import axios from 'axios'
import { Markup } from 'telegraf'

export default async (ctx) => {
    const username = ctx.message.text.split(' ')[1]
    if (!username) {
        ctx.reply('Please provide a username to search for.')
        return
    }
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const data = response.data
        const resultText = `<b>Name:</b> ${data.name ? data.name : data.login}\n<b>Followers:</b> ${data.followers}\n<b>Following:</b> ${data.following}\n<b>Public Repos:</b> ${data.public_repos}\n<b>Public Gists:</b> ${data.public_gists}\n<b>Location:</b> ${data.location ? data.location : 'Unknown'}\n<b>Company:</b> ${data.company ? data.company : 'Unknown'}\n<b>Twitter:</b> ${data.twitter_username ? data.twitter_username : 'Unknown'}\n<b>Website:</b> ${data.blog}\n<b>GitHub:</b> ${data.html_url}`
        ctx.replyWithHTML(resultText)
    } catch (error) {
        ctx.reply('No results found.')
    }
}