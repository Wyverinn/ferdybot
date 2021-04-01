const sentences = [
    'Ah, le mie vecchie ossa...',
    'Ora adotto il metodo mafioso – prima lo faccio e poi lo spiego.',
    'NO ORFANI',
    'New. Project. WallStreet.',
    'Quando gli dei vogliono distruggere un uomo, prima lo rendono folle.',
]

const greetings = [
    'Oggi ci divertiamo.',
	'Ci siete fino a qui?',
	'Potresti accendere la cam per favore?',
]

/*
	Enjoy the Silence
	Blue Monday
	Lateralus
	Sgt. Peppers
*/
const songs = [

]

const foods = [
	'un salmone intero',
	'un kebab',
	'una pizza panna e salmone'
]

const marocchinoURL = 'https://labottegadelbuoncaffe.com/wp-content/uploads/2019/09/caff%C3%A8-marocchino.jpg'

const azioneURL = 'https://it.finance.yahoo.com/quote/BTC-EUR';

const helpMsg =	'\`\`\`'															+ '\n'
			+	'ciao ferdybot -> saluto'											+ '\n'
			+	'caffè         -> elogio il caffè'									+ '\n'
			+	'pasticciotto  -> elogio i pasticciotti leccesi'					+ '\n'
			+	'-rnd          -> dispenso una delle mie massime'					+ '\n'
			+	'-pausa <tag>  -> metto un attimo in pausa la persona menzionata'	+ '\n'
			+	'-marocchino   -> ti faccio vedere il mio caffè preferito'			+ '\n'
			+	'\`\`\`'

const muteTimer = 20000

module.exports = {
	sentences,
	greetings,
	songs,
	foods,
	marocchinoURL,
	azioneURL,
	helpMsg,
	muteTimer
}