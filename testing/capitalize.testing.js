const capitalize = require('../src/capitalize')

test("Expect a given string to be capitalized", () => {
  expect(capitalize('kampala')).toBe('Kampala');
})