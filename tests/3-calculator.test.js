const { calculator, executeOperation } = require('../tasks/3-calculator');

describe('Calculator', () => {
  beforeEach(() => {
    calculator.clear();
  });

  describe('базовые операции', () => {
    it('должен правильно складывать числа', () => {
      calculator.add(5);
      expect(calculator.getResult()).toBe(5);
      
      calculator.add(3);
      expect(calculator.getResult()).toBe(8);
    });

    it('должен правильно вычитать числа', () => {
      calculator.add(10);
      calculator.subtract(4);
      expect(calculator.getResult()).toBe(6);
    });

    it('должен правильно умножать числа', () => {
      calculator.add(2);
      calculator.multiply(3);
      expect(calculator.getResult()).toBe(6);
    });

    it('должен правильно делить числа', () => {
      calculator.add(6);
      calculator.divide(2);
      expect(calculator.getResult()).toBe(3);
    });

    it('должен выбрасывать ошибку при делении на ноль', () => {
      calculator.add(5);
      expect(() => calculator.divide(0)).toThrow('Деление на ноль');
    });

    it('должен поддерживать цепочку вызовов', () => {
      expect(calculator.add(5).multiply(2).subtract(3).divide(2).getResult()).toBe(3.5);
    });
  });

  describe('executeOperation', () => {
    it('должен выполнять операции с правильным контекстом', () => {
      executeOperation(calculator.add, 5);
      expect(calculator.getResult()).toBe(5);

      executeOperation(calculator.multiply, 2);
      expect(calculator.getResult()).toBe(10);
    });

    it('должен сохранять контекст при передаче метода', () => {
      const add = calculator.add;
      executeOperation(add, 5);
      expect(calculator.getResult()).toBe(5);
    });

    it('должен поддерживать цепочку вызовов', () => {
      const result = executeOperation(calculator.add, 5)
        .multiply(2)
        .subtract(3)
        .divide(2)
        .getResult();
      
      expect(result).toBe(3.5);
    });
  });
}); 