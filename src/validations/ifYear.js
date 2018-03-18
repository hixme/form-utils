import moment from 'moment'

export default (year = '') => {
  const currentYear = year || Number(moment(Date.now()).format('YYYY'))
  return (str) => {
    const num = Number(str)
    return (!Number.isNaN(num) && (num === currentYear || num === currentYear + 1)) || false
  }
}
