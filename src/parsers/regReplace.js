import isString from 'lodash/isString'

export default (rgx, repl = '') => str => (isString(str) && str.replace(rgx, repl)) || ''
