const myFlat = require('../tasks/2-my-flat');

describe('myFlat', () => {
  it('должен полностью уплощать вложенный массив', () => {
    expect(myFlat([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    expect(myFlat([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    expect(myFlat([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it('должен обрабатывать пустые массивы', () => {
    expect(myFlat([])).toEqual([]);
    expect(myFlat([[], [[]]])).toEqual([]);
  });

  it('должен обрабатывать разные типы данных', () => {
    expect(myFlat([1, ['2', [true]], null])).toEqual([1, '2', true, null]);
    expect(myFlat([undefined, [null, [false]]])).toEqual([undefined, null, false]);
  });

  it('должен обрабатывать невалидные входные данные', () => {
    expect(myFlat(null)).toEqual(null);
    expect(myFlat(undefined)).toEqual(undefined);
    expect(myFlat(123)).toEqual(123);
  });
}); 