import { transform, isEqual, isObject } from 'lodash/fp'

const tf = transform.convert({ cap: false })

const diff = (bObj, targetObj) => {
  const iteratee = baseObj => (result = {}, value, key) => {
    const newVals = {}
    if (!isEqual(value, baseObj[key])) {
      newVals[key] = (isObject(value) && isObject(baseObj[key]) && diff(baseObj[key], value)) || value
    }
    return Object.assign(result, newVals)
  }
  return tf(iteratee(bObj), null, targetObj)
}

export default diff
