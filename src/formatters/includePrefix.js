export default pffx => (raw) => {
  const str = (typeof raw === 'string' && raw) || ''
  if (str === pffx || str === '') return ''
  return (str.charAt(0) === pffx && str) || pffx.concat(str)
}
