import isString from 'lodash/isString'

export default rgx => str => (isString(str) && rgx.test(str)) || false
