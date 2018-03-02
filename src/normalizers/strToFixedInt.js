import regex from './regex'

const strToFixedInt = (int) => (str, prev = '') => {
  const raw = regex(new RegExp(''.concat('^\\d{0,', int, '}$')))(str)
  return (raw !== '' && raw) || (raw === null && prev) || ''
}

export default strToFixedInt
