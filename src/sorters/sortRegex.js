import orderBy from 'lodash/sortBy'
import fill from 'lodash/fill'

const sortRegex = (rgx, min = 0, max = 0) => (arr = [], order = 'asc') => {
  const matched = val => {
    const matches = val.match(rgx)
    return (max && matches.slice(min, max)) || matches.slice(min)
  }
  orderBy(arr, matched, fill([], order, 0, max - min))
}

export default sortRegex
