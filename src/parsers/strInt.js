import integer from '../regex/integer'
import regReplace from './regReplace'

export default str => regReplace(integer)(str)
