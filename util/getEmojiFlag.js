import emojiFlags from './flag-emojis-by-code'

export default countryCode =>
  emojiFlags[countryCode.toUpperCase()]?.emoji || ' '
