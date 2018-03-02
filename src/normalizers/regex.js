const regex = (rgx, num = 0) => (str = '') => {
  const finds = str.toString().match(rgx)
  return (finds && finds[num])
}

export default regex
