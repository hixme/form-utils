export default (txt, valid) => (value, allValues, props, name) =>
  (valid.some(v => v(value, allValues, props, name)) && txt) || undefined
