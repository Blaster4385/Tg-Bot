// Module: Help
// Description: Shows a list of available commands
// Usage: /help

export default async (ctx) => {
    const helpText = `
<b>Hey there! Welcome to TheTablaster's bot!</b>

<b>This bot is made by TheTablaster in JavaScript using the Telegraf.js library.</b>

<b>A list of available commands is given below:</b>

/start : Start the bot
/help : Show this help message
    `
    ctx.replyWithHTML(helpText)
}