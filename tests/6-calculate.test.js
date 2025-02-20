const calculate = require('../tasks/6-calculate');

describe('calculate', () => {
  it('должен применять операцию к каждому элементу массива', () => {
    const numbers = [1, 2, 3];
    const square = x => x * x;
    
    const result = calculate(numbers, square);
    expect(result).toEqual([1, 4, 9]);
  });

  it('должен обрабатывать пустой массив', () => {
    const numbers = [];
    const square = x => x * x;
    
    const result = calculate(numbers, square);
    expect(result).toEqual([]);
  });

  it('должен обрабатывать разные операции', () => {
    const numbers = [1, 2, 3];
    const double = x => x * 2;
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    
    expect(calculate(numbers, double)).toEqual([2, 4, 6]);
    expect(calculate([1, 2, 3, 4], factorial)).toEqual([1, 2, 6, 24]);
  });

  it('должен обрабатывать невалидные входные данные', () => {
    const square = x => x * x;
    
    expect(() => calculate(null, square)).toThrow();
    expect(() => calculate(undefined, square)).toThrow();
    expect(() => calculate(123, square)).toThrow();
  });
}); 