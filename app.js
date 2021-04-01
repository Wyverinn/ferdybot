const { Client, MessageAttachment } = require('discord.js')
const { sentences, greetings, songs, foods, marocchinoURL, helpMsg, muteTimer } = require('./utils/config')
const { random } = require('./utils/helpers')
require('dotenv').config()

const client = new Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
})

client.login(process.env.BOT_TOKEN)

client.once('ready', () => console.log('bot is ready!'))

client.on('message', msg => {
    switch (msg.content.toLowerCase()) {
        case '-rnd':
            msg.channel.send(random(sentences))
            break
        case '-marocchino':
            const attachment = new MessageAttachment(marocchinoURL)
            msg.channel.send(`${msg.author}`, attachment)
            break
        case (msg.content.includes('ciao ferdybot') && msg.content):
            msg.reply(`ben arrivato. ${random(greetings)}`)
            break
        case (msg.content.includes('pasticciott') && msg.content):
            msg.channel.send('Il pasticciotto leccese... gioia e letizia del mondo...')
            break
        case (msg.content.includes('caffè') && msg.content):
            msg.channel.send('Ah, il caffè... la prova che Dio esiste.')
            break
        case (msg.content.includes('ferdybot') && msg.content.includes('fame') && msg.content):
            msg.channel.send(`Oggi ho proprio voglia di ${random(foods)}.`)
            break
        case (msg.content.startsWith('-pausa') && msg.content):
            /*
            const mutedRole = msg.guild.roles.cache.get('826951271604813865')
            */
            const user = msg.mentions.users.first()
            const member = msg.guild.member(user)
            
            msg.channel.send(`Ti metto un attimo in pausa, ${user.tag.slice(0, -5)}.`)
            /*
            member.roles.add(mutedRole)
                .then(_ => setTimeout(
                    () => member.roles.remove(mutedRole),
                    muteTimer
                ))
                */
            break
        case '-ferdy help':
            msg.channel.send(helpMsg)
            break
        default:
            return
    }
})