const capitalize = require('../src/capitalize.js')

test("Expect a given string to be capitalized", () => {
  expect(capitalize('kampala')).toBe('KAMPALA');
});