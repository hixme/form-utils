import strFixed from './strFixed'
import strDec from './strDec'

export default dec => (raw) => {
  const str = strDec(raw)
  const split = str.split('.')
  if (split.length > 1) {
    return split[0].concat('.', strFixed(dec)(split[1]))
  }
  return str
}
