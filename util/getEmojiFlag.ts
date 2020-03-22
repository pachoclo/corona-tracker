import emojiFlags from './flag-emojis-by-code.json'

export default countryCode =>
  emojiFlags[countryCode.toUpperCase()]?.emoji || ' '
