export default (txt, valid) => (value, allValues, props, name) =>
  (valid.reduce((prev, v) => prev && v(prev, allValues, props, name), value) && txt) || undefined
