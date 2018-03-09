import strFixed from './strFixed'
import strInt from './strInt'

export default (int, dec) => rawStr => {
  const str = strInt(rawStr)
  if (str === '') return ''
  const split = str.split('.')
  if (split.length > 1) {
    const arr = [int, dec]
    return split.slice(0, 2).map((s, idx) => strFixed(arr[idx])(s)).join('.')
  }
  return strFixed(int)(str)
}
