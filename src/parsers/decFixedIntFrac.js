import isString from 'lodash/isString'

import strFixed from './strFixed'
import strInt from './strInt'

export default (int, dec) => (strRaw) => {
  const str = (isString(strRaw) && strRaw) || ''
  const split = strInt(str).split('.')
  if (split.length > 1) {
    const arr = [int, dec]
    return split.slice(0, 2).map((s, idx) => strFixed(arr[idx])(s)).join('.')
  }
  return strFixed(int)(str)
}
