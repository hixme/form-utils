import strFixed from './strFixed'
import strDec from './strDec'

export default (int, dec) => rawStr => {
  const str = strDec(rawStr)
  const split = str.split('.')
  if (split.length > 1) {
    const arr = [int, dec]
    return split.slice(0, 2).map((s, idx) => strFixed(arr[idx])(s)).join('.')
  }
  if (str === '') return ''
  return strFixed(int)(str)
}
