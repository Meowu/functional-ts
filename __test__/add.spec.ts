import { add } from '../src/add';

describe('The add func', () => {
  
  it('should add the two number properly', () => {
    expect(add(1, 2)).toEqual(3);
  })
})