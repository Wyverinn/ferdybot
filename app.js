const fs = require('fs')
const Discord = require('discord.js')
const { prefix, sentences, greetings, songs, foods, marocchinoURL, helpMsg, muteTimer } = require('./utils/config')
const { random } = require('./utils/helpers')
require('dotenv').config()

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

commandFiles.forEach(file => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
})

client.login(process.env.BOT_TOKEN)

client.once('ready', () => console.log('bot is ready!'))

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return

    const command = msg.content.toLowerCase()
    
    switch (message) {
        case '-rnd':
            client.commands.get('frase random').execute(msg)
        case '-marocchino':
            const attachment = new MessageAttachment(marocchinoURL)
            msg.channel.send(`${msg.author}`, attachment)
            break
        case (message.includes('ciao ferdybot') && message):
            msg.reply(`ben arrivato. ${random(greetings)}`)
            break
        case (message.includes('pasticciott') && message):
            msg.channel.send('Il pasticciotto leccese... gioia e letizia del mondo...')
            break
        case (message.includes('caffè') && message):
            msg.channel.send('Ah, il caffè... la prova che Dio esiste.')
            break
        case (message.includes('ferdybot') && message.includes('fame') && message):
            msg.channel.send(`Oggi ho proprio voglia di ${random(foods)}.`)
            break
        case (message.startsWith('-pausa') && message):
            /*
            const mutedRole = msg.guild.roles.cache.get('826951271604813865')
            */

            const user = msg.mentions.users.size
                ? msg.mentions.users.first()
                : msg.author
            
            msg.channel.send(`Ti metto un attimo in pausa, ${user.tag.slice(0, -5)}.`)
            
            /*
            const member = msg.guild.member(user)

            member.roles.add(mutedRole)
                .then(_ => setTimeout(
                    () => member.roles.remove(mutedRole),
                    muteTimer
                ))
                */
            break
        case '-ferdybot help':
            msg.channel.send(helpMsg)
            break
        default:
            return
    }
})