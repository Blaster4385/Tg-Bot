// Module: neofetch
// Description: Shows system information
// Usage: /neofetch

import { spawn } from 'child_process'

export const neofetch = (ctx) => {
    const child = spawn('neofetch', ['--stdout'])
    let output = ''
    child.stdout.on('data', (data) => {
        output += data.toString('utf8')
    })
    child.on('close', (code) => {
        ctx.replyWithHTML(`<code>${output}</code>`)
    })
}

export default neofetch