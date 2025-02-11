import  StringCalculatorLogic  from '../CalculatorLogic';

describe('StringCalculatorLogic', () => {
  let calculator: StringCalculatorLogic;

  beforeEach(() => {
    calculator = new StringCalculatorLogic();
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return number for single number', () => {
    expect(calculator.add('1')).toBe(1);
  });

  test('should add two numbers', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

  test('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should support custom delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  test('should throw error for negative numbers', () => {
    expect(() => calculator.add('-1,2,-3'))
      .toThrow('Negative numbers not allowed: -1, -3');
  });
});