export default sffx => (raw) => {
  const str = (typeof raw === 'string' && raw) || ''
  if (str === sffx || str === '') return ''
  return (str.charAt(str.length - 1) === sffx && str) || str.concat(sffx)
}
