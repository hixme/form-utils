import strInt from './strInt'

export default str => {
  if (str === '') return ''
  const split = str.split('.')
  if (split.length > 1) {
    return split.slice(0, 2).map(strInt).join('.')
  }
  return strInt(str)
}
