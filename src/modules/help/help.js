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
/neofetch : Show information about the host system
/meaning [word] : Get the meaning of a word
/arch [package] : Search for a package on the AUR
/aur [package] : Get information about an AUR package
/ip [address] : Get information about an IP address
/gituser [username] : Get information about a GitHub user
    `
    ctx.replyWithHTML(helpText)
}