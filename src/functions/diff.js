import { transform, isEqual, isObject } from 'lodash/fp'

const tf = transform.convert({ cap: false })

const diff = (baseObj, targetObj) => {
  const iteratee = (result = {}, value, key) => {
    const baseObjKeyValue = baseObj[key]
    if (isEqual(value, baseObjKeyValue)) {
      return result
    }
    const newVals = {
      [key]:
        (isObject(value) &&
          isObject(baseObjKeyValue) &&
          diff(baseObjKeyValue, value)) ||
        value,
    }

    return Object.assign(result, newVals)
  }
  return tf(iteratee, null, targetObj)
}

export default diff
