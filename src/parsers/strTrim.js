import isString from 'lodash/isString'

export default (int = 1) => str => (isString(str) && str.slice(0, str.length - int)) || ''
