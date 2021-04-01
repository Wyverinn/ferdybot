const { MessageAttachment } = require('discord.js')
const { random } = require('../../utils/helpers')
const marocchiniURL = [
	'https://labottegadelbuoncaffe.com/wp-content/uploads/2019/09/caff%C3%A8-marocchino.jpg',
	'https://laboratorioespresso.it/wp-content/uploads/2018/05/caffe-marocchino.jpg',
	'https://www.caffevergnano.com/blog/wp-content/uploads/2019/01/marocchino.jpg',
	'http://sestarete.tv.it/wp-content/uploads/2020/07/caff%C3%A8-speciale-marocchino.png',
]

module.exports = {
	name: 'marocchino',
	description: 'ti mostro il mio caffè preferito. Conosco un posticino qui a Milano dove lo fanno buonissimo.',
	execute: msg => {
		const attachment = new MessageAttachment(random(marocchiniURL))
        msg.channel.send(`${msg.author}`, attachment)
	}
}