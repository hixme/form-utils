import strInt from './strInt'

export default (strRaw) => {
  const str = (typeof strRaw === 'string' && strRaw) || ''
  const split = (str || '').split('.')
  if (split.length > 1) {
    return split.slice(0, 2).map(strInt).join('.')
  }
  return strInt(split)
}
