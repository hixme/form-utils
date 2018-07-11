import strFixed from './strFixed'
import strInt from './strInt'

export default dec => (strRaw) => {
  const str = (typeof strRaw === 'string' && strRaw) || ''
  const split = str.split('.')
  if (split.length > 1) {
    return strInt(split[0]).concat('.', strFixed(dec)(strInt(split[1])))
  }
  return strInt(str)
}
