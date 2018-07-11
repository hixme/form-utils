export default (rgx, num = 0) => (str) => {
  if (typeof str !== 'string') return false
  const finds = str.match(rgx)
  return (finds && finds[num])
}
