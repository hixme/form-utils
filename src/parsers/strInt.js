import integer from 'helpers/regex/integer'
import regReplace from './regReplace'

export default str => {
  if (typeof str === 'string') {
    return regReplace(integer)(str)
  }
  return str
}
