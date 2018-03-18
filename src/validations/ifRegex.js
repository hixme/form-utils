export default rgx => str => (typeof str === 'string' && rgx.test(str)) || false
