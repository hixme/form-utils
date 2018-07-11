import isString from 'lodash/isString'
import strInt from './strInt'

export default (strRaw) => {
  const str = (isString(strRaw) && strRaw) || ''
  const split = (str || '').split('.')
  if (split.length > 1) {
    return split.slice(0, 2).map(strInt).join('.')
  }
  return strInt(split)
}
