const regex = (rgx, num = 0) => str => {
  const finds = str.match(rgx)
  return (finds && finds[num])
}

export default regex
