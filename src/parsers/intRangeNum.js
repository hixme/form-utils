export default (min, max) => num => (num !== '' && Math.min(max, Math.max(min, Number(num))).toString()) || ''
