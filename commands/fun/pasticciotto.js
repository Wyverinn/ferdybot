const { MessageAttachment } = require('discord.js')
const { random } = require('../../utils/helpers')
const pasticciottiURLs = [
	'https://i.pinimg.com/originals/1c/2d/0b/1c2d0b9699e9d8387228d470f5892744.jpg',
	'https://wips.plug.it/cips/buonissimo.org/cms/2019/07/guarnire-pasticciotto-leccese.jpg',
	'https://www.nelsalento.com/blog/wp-content/uploads/2018/02/pasticciotto-leccese-dolce.jpg',
	'https://www.zenithotel.it/wp-content/uploads/2019/07/pasticciotto.jpg',
	'https://primochef.it/wp-content/uploads/2019/04/SH_pasticciotto-1200x800.jpg',
]

module.exports = {
	name: 'pasticciotto',
	description: 'una delle migliori paste mai esistite a questo mondo.',
	execute: msg => {
		const attachment = new MessageAttachment(random(pasticciottiURLs))
        msg.channel.send(attachment)
	}
}