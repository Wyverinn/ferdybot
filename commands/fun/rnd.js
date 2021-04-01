const { sentences } = require('../../utils/config')
const { random } = require('../../utils/helpers')

module.exports = {
	name: 'rnd',
	description: 'ti dispenso una delle mie massime.',
	execute: msg => msg.channel.send(random(sentences))
}