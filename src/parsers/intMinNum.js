import isString from 'lodash/isString'

export default min => num => (isString(num) && Math.max(min, Number(num)).toString()) || num
