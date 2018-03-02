import regex from './regex'

const strToInt = () => (str, prev = '') => {
  const raw = regex(/^\\d*$/)(str)
  return (raw !== '' && raw) || (raw === null && prev) || ''
}

export default strToInt
