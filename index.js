var moment = require('moment')
var randomize = require('randomatic')
var _ = require('lodash')
exports.generateId = (suffixLength = 16) => {
  const characters = []
  let timestamp = moment().valueOf().toString(16).toUpperCase()
  const randomString = randomize('A0', (Math.ceil(suffixLength / 4.0) * 4))

  while ((timestamp.length % 4)) {
    timestamp = `${timestamp}${randomize('A0', 1)}`
  }

  _.forEach(timestamp, (letter, key) => {
    if (!(key % 4) && key !== 0) {
      characters.push('-')
    }
    characters.push(letter)
  })
  characters.push('-')
  _.forEach(randomString, (letter, key) => {
    if (!(key % 4) && key !== 0) {
      characters.push('-')
    }
    characters.push(letter)
  })

  return characters.join('')
}
