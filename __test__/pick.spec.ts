import { pick } from "../src/pick";

describe('Pick item from array recursively', () => {

    it('should pick the first item', () => {
        const list = ['a', 'b', 'c'];
        expect(pick(1, list)).toBe('a');
    })

    it('should pick the specific item', () => {
        const list = ['joi', 'meowu', 'jessy', 'Micky']
        expect(pick(3, list)).toEqual('jessy')
    })
})