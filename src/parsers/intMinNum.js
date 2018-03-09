export default min => num => (num !== '' && Math.max(min, Number(num)).toString()) || num
