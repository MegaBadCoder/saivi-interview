const myForEach = require('../tasks/5-my-for-each');

describe('myForEach', () => {
  it('должен вызывать колбэк для каждого элемента массива', () => {
    const arr = [1, 2, 3];
    const mockCallback = jest.fn();
    
    myForEach(arr, mockCallback);
    
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback).toHaveBeenNthCalledWith(1, 1, 0, arr);
    expect(mockCallback).toHaveBeenNthCalledWith(2, 2, 1, arr);
    expect(mockCallback).toHaveBeenNthCalledWith(3, 3, 2, arr);
  });

  it('должен обрабатывать пустой массив', () => {
    const arr = [];
    const mockCallback = jest.fn();
    
    myForEach(arr, mockCallback);
    
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('должен передавать правильный контекст в колбэк', () => {
    const arr = [1];
    const context = { value: 42 };
    
    myForEach(arr, function() {
      expect(this).toBe(context);
    }, context);
  });

  it('должен обрабатывать невалидные входные данные', () => {
    const mockCallback = jest.fn();
    
    expect(() => myForEach(null, mockCallback)).toThrow();
    expect(() => myForEach(undefined, mockCallback)).toThrow();
    expect(() => myForEach(123, mockCallback)).toThrow();
  });
}); 