export default (rgx, repl = '') => str => (typeof str === 'string' && str.replace(rgx, repl)) || ''
