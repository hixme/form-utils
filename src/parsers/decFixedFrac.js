import strFixed from './strFixed'
import strInt from './strInt'

export default dec => rawStr => {
  const str = strInt(rawStr)
  if (str === '') return ''
  const split = str.split('.')
  if (split.length > 1) {
    return split[0].concat('.', strFixed(dec)(split[1]))
  }
  return str
}
