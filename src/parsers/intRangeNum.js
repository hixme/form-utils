import isString from 'lodash/isString'

export default (min, max) => num =>
  (isString(num) && Math.min(max, Math.max(min, Number(num))).toString()) || ''
