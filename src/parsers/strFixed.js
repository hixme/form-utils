export default int => str => (str && str.length > int && str.slice(0, int)) || str
