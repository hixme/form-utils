import strFixed from './strFixed'

export default dec => str => {
  if (str === '') return ''
  const split = str.split('.')
  if (split.length > 1) {
    return split[0].concat('.', strFixed(dec)(split[1]))
  }
  return str
}
