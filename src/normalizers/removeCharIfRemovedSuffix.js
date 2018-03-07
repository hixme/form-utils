export default sfx => (val, prev) => {
  const lastValPos = val.length - 1
  const lastVal = val.charAt(lastValPos)
  const lastPrev = prev.charAt(prev.length - 1)
  if (lastValPos === prev.length && lastVal !== lastPrev && lastPrev === sfx) {
    return val.slice(0, -1)
  }
  return val
}
