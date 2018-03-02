import regex from './regex'

const currencyToFixedDecimal = (int, dec, symb = '$') => (str, prev = '') => {
  const raw = regex(new RegExp(''.concat('^\\', symb, '?(\\d{0,', int, '}\\.?\\d{0,', dec, '})$')), 1)(str)
  return (raw !== '' && raw) || (raw === null && prev) || ''
}

export default currencyToFixedDecimal
