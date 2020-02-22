import { car, cons } from '../src';

describe('The car return the first element of a list', () => {
  
  it('should work as expected', () => {
    const closure = cons(1, 2);
    expect(car(closure)).toBe(1);
  })
})