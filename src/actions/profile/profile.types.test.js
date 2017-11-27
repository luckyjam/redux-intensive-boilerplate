// Types
import types from './types';

describe('profile types:', () => {
    test('types object should be frozen', () => {
        expect(Object.isFrozen(types)).toBe(true);
    });

    test('types object should not be mutated', () => {
        expect(() => types.mutation = 'mutation').toThrow();
    });
});
