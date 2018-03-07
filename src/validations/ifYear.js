import moment from 'moment'

const ifYear = (year = '') => () => {
  const currentYear = year || Number(moment(Date.now()).format('YYYY'))
  return val => Number(val) < currentYear || Number(val) > currentYear + 1 || val === undefined
}

export default ifYear
