import integer from 'helpers/regex/integer'
import regReplace from './regReplace'

export default str => {
  if (typeof str === 'string') {
    const result = regReplace(integer)(str)
    const num = Number(result)
    return (!Number.isNaN(num) && num.toString()) || ''
  }
  return str
}
