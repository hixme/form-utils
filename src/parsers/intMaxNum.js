import isString from 'lodash/isString'

export default max => num => (isString(num) && Math.min(max, Number(num)).toString()) || num
