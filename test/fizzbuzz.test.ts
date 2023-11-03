import {describe, expect, it} from 'vitest'

const aimFn = () : void => {
  // empty fn
}

describe('frizzbuzz', () : void => {
  it('should be a function', () : void => {
  expect(typeof aimFn).toBe('function')
  })
})