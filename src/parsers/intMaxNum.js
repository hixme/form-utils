export default max => num => (num !== '' && Math.min(max, Number(num)).toString()) || num
