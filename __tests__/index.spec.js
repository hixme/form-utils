import diff from '../lib/functions/ifValidText'
import ifValidText from '../lib/functions/ifValidText'

describe('(Form.l)', () => {

  describe('(ifValidText)', () => {
    it('Should be exported as a function.', () => {
      expect(typeof ifValidText).toBe('function')
    })
  })

  describe('(diff)', () => {
    it('Should be exported as a function.', () => {
      expect(typeof diff).toBe('function')
    })
  })
})