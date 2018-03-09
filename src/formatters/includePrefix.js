export default pffx => rawStr => {
  const str = rawStr.toString()
  if (str === pffx || str === '') return ''
  return (str.charAt(0) === pffx && str) || pffx.concat(str)
}
