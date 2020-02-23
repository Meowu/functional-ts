import { sub } from '../src';

describe('The sub', () => {

  it('should subtract the number properly', () => {
    expect(sub(5, 2)).toEqual(3);
  })
})