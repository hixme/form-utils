import orderBy from 'lodash/sortBy'

const sortRegex = (rgx, min = 0, max = 0, func) => (arr = [], order = 'asc') => {
  const matched = (val) => {
    const matches = val.match(rgx)
    const sliced = (max && matches.slice(min, max)) || matches.slice(min)
    return (func && func(sliced)) || sliced
  }
  return orderBy(arr, matched, order)
}

export default sortRegex
