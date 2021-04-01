module.exports = {
	name: 'pausa',
	description: 'metto un attimo in pausa la persona menzionata.',
	usage: '<tag>',
	execute: msg => {
		const user = msg.mentions.users.first()
        
		user
			? msg.channel.send(`Ti metto un attimo in pausa, ${user.username}.`)
			: msg.channel.send(`${msg.author}, ricorda di menzionare almeno una persona!`)
	}
}