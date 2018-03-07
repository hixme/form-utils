const addPrefix = prfx => str => (str && prfx.concat(str)) || ''

export default addPrefix
