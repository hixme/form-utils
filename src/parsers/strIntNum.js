import strInt from './strInt'

export default (str) => {
  const result = strInt(str)
  const num = Number(result)
  return (!Number.isNaN(num) && num.toString()) || ''
}
