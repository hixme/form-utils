import strToInt from './strToInt'

const strToRangedInt = (min, max) => (str, prev = '') => {
  const raw = strToInt(str, prev)
  if (raw === '') return ''
  return Math.min(max, Math.max(min, Number(raw))).toString()
}

export default strToRangedInt
