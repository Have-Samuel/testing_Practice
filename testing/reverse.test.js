const reverseString = require('../src/reverse.js');

test('Expect that this test reverses strings', () => {
  expect(reverseString('KAMPALA')).toBe('ALAPMAK');
});

test('reversed "test" to "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});
