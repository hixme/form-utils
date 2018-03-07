import strFixed from './strFixed'

export default (int, dec) => str => {
  if (str === '') return ''
  const split = str.split('.')
  if (split.length > 1) {
    const arr = [int, dec]
    return split.slice(0, 2).map((s, idx) => strFixed(arr[idx])(s)).join('.')
  }
  return strFixed(int)(str)
}
