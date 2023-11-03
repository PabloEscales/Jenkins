import {describe, expect, it} from 'vitest'

const aimFn = () : void => {
  // An empty fn 72
}

describe('frizzbuzz', () : void => {
  it('should be a function', () : void => {
  expect(typeof aimFn).toBe('function')
  })
})