import isString from 'lodash/isString'

export default sffx => (raw) => {
  const str = (isString(raw) && raw) || ''
  if (str === sffx || str === '') return ''
  return (str.charAt(str.length - 1) === sffx && str) || str.concat(sffx)
}
