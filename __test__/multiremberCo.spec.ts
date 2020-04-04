import { multiremberCo } from '../src/multiremberCo';

describe('collector', () => {

  it('a friend', () => {
    const aFriend = (x, y) => y.length === 0;
    expect(() => multiremberCo('tuna', [], aFriend)).toBeTruthy();
    expect(multiremberCo('tuna', ['tuna'], aFriend)).toBeFalsy();
  })

  it('last friend', () => {
    const lastFriend = (x, y) => y.length;
    const lat = ['strawberries', 'tuna', 'and', 'swordfish', 'tuna', 'tuna'];
    expect(multiremberCo('tuna', lat, lastFriend)).toEqual(3);
  })
})