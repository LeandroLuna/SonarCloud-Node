// math.test.js
const doubleNumber = require('./math');

test('Should double the given number', () => {
  expect(doubleNumber(3)).toBe(6);
});