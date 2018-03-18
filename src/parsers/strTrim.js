export default (int = 1) => str => (typeof str === 'string' && str.slice(0, str.length - int)) || ''
