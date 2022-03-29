const Calculator = require ('../src/calc.js')

describe( Calculator, () => {
  test("Expect two numbers to be added", () => {
    const addMe = new Calculator(9,3);
    expect(addMe.add()).tobe(12);
  })
  test("Expect two numbers to be subtracted", () => {
    const addMe = new Calculator(15,7);
    expect(addMe,subtract()).toBe(8);
  })
  test("Expect two numbers to be divided", () => {
    const addMe = new Calculator(8,2);
    expect(addMe.divide()).toBe(4);
  })
  test("Expect two numbers to be multiplied", () => {
    const addMe = new Calculator(13,2);
    expect(addMe.multiply()).toBe(26);
  })
});