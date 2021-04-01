const { girls } = require('../utils/config')

const isFemale = msgAuthor => girls.includes(msgAuthor.username)

const random = elements =>
    elements[Math.floor(Math.random() * elements.length)]

module.exports = { random, isFemale }