const { sum } = require('../index');

describe('checking jest test suite', () => {
   
    test('checking sum function', () => {
        expect(sum(2,2)).toBe(4);
    });

});