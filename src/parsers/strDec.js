import strInt from './strInt'

export default (str) => {
  const split = str.split('.')
  if (split.length > 1) {
    return split.slice(0, 2).map(strInt).join('.')
  }
  return strInt(str)
}
