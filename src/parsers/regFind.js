import isString from 'lodash/isString'

export default (rgx, num = 0) => (str) => {
  if (isString(str)) {
    const finds = str.match(rgx)
    return (finds && finds[num])
  }
  return false
}
