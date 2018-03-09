export default sffx => rawStr => {
  const str = rawStr.toString()
  if (str === sffx || str === '') return ''
  return (str.charAt(str.length - 1) === sffx && str) || str.concat(sffx)
}
