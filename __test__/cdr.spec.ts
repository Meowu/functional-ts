import { cdr, cons } from '../src';

describe('The cdr return the first element of a list', () => {
  
  it('should work as expected', () => {
    const closure = cons(1, 2);
    expect(cdr(closure)).toEqual([2]); // not toBe here in that it uses `Object.is` equality.
  })
})