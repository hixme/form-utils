import regex from './regex'

const currencyToDecimal = (dec, symb = '$') => (str, prev = '') => {
  const raw = regex(new RegExp(''.concat('^\\', symb, '?(\\d*\\.?\\d{0,', dec, '})$')), 1)(str)
  return (raw !== '' && raw) || (raw === null && prev) || ''
}

export default currencyToDecimal
