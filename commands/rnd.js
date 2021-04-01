const { sentences } = require('../utils/config')
const { random } = require('../utils/helpers')

module.exports = {
	name: 'frase random',
	description: 'dispenso una delle mie massime.',
	execute: msg => msg.channel.send(random(sentences))
}