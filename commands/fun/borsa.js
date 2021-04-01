const azioniURL = 'https://it.finance.yahoo.com/quote/BTC-EUR/'

module.exports = {
	name: 'borsa',
	description: 'ti aggiorno sui vari trend dei miei investimenti.',
	aliases: ['stock', 'bitcoin', 'crypto'],
	execute: msg => {
        msg.channel.send(`Oggi i miei investimenti vanno così:\n${azioniURL}`)
	},
}