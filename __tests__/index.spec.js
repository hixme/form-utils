import ifValidText from '../lib/functions/ifValidText'

describe('(Form.l)', () => {
  describe('(ifValidText)', () => {
    it('Should be exported as a function.', () => {
      expect(typeof ifValidText).toBe('function')
    })
  })
})