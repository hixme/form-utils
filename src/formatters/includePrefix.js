import isString from 'lodash/isString'

export default pffx => (raw) => {
  const str = (isString(raw) && raw) || ''
  if (str === pffx || str === '') return ''
  return (str.charAt(0) === pffx && str) || pffx.concat(str)
}
