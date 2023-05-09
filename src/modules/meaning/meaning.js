// Module: Meaning
// Description: Returns the meaning of a word
// Usage: /meaning <word>

import axios from 'axios'
import { Markup } from 'telegraf'

const meaning = async (ctx) => {
    const word = ctx.message.text.split(' ')[1]
    if (!word) {
        ctx.reply('Please provide a word to search for.')
        return
    }
    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = response.data[0]
        const meanings = data.meanings
        const meaningsText = meanings.map((meaning) => {
            const definitions = meaning.definitions
            const definitionsText = definitions.map((definition) => {
                return `<b>${definition.definition}</b>\n<i>Example:</i> ${definition.example}\n`
            }).join('\n')
            return `<b>${meaning.partOfSpeech}</b>\n${definitionsText}`
        }).join('\n')
        ctx.replyWithHTML(`<b>${word}</b>\n\n${meaningsText}`, Markup.inlineKeyboard([
            Markup.button.url('🔍 Search', `https://www.google.com/search?q=${word}`)
        ]))
    } catch (error) {
        ctx.reply('No results found.')
    }
}

export default meaning