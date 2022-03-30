const stringLength = require('../src/string.js')

test("Expect that this test shows an error", () => {
  expect(stringLength('have')).toBe(1);
  expect(() => stringLength('Have is Cool')).toThrow('String must have at least 1 character and not more than 10');
});

test('Expect that this test shows an error', () => {
  expect(stringLength('nazakukuha')).toBe(10);
});

test('string length is 10', () => {
  expect(stringLength('ooouioooui')).toBe(10);
});

test('string length is 4', () => {
  expect(stringLength('golf')).toBe(4);
});