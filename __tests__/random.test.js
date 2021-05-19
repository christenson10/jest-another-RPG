const checkIfEqual = require('../lib/random.js');

test('checks if 10 equal to 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});