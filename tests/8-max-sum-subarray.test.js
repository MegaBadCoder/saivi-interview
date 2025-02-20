const maxSumSubarray = require('../tasks/8-max-sum-subarray');

describe('maxSumSubarray', () => {
  it('должен находить максимальную сумму подмассива', () => {
    expect(maxSumSubarray([1, 2, 3, 4, 5], 2)).toBe(9);
    expect(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSumSubarray([100, 200, 300, 400], 2)).toBe(700);
  });

  it('должен обрабатывать массив, где k равно длине массива', () => {
    expect(maxSumSubarray([1, 2, 3, 4, 5], 5)).toBe(15);
  });

  it('должен обрабатывать массив с отрицательными числами', () => {
    expect(maxSumSubarray([-1, -2, -3, -4, -5], 2)).toBe(-3);
    expect(maxSumSubarray([-1, 2, -3, 4, -5], 2)).toBe(1);
  });

  it('должен выбрасывать ошибку при невалидных входных данных', () => {
    expect(() => maxSumSubarray(null, 2)).toThrow();
    expect(() => maxSumSubarray([1, 2, 3], '2')).toThrow();
    expect(() => maxSumSubarray([1, 2, 3], 5)).toThrow();
  });
}); 