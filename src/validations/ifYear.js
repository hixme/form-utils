import moment from 'moment'

export default (year, range = 0) => {
  const currentYear = year || Number(moment(Date.now()).format('YYYY'))
  return (str) => {
    const num = Number(str)
    return (!Number.isNaN(num) && (num === currentYear || num === currentYear + range)) || false
  }
}
