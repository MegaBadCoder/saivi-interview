const { Node, reverseLinkedList } = require('../tasks/9-reverse-linked-list');

describe('reverseLinkedList', () => {
  it('должен реверсировать список из нескольких узлов', () => {
    const list = new Node(1, new Node(2, new Node(3)));
    const reversed = reverseLinkedList(list);
    
    expect(reversed.value).toBe(3);
    expect(reversed.next.value).toBe(2);
    expect(reversed.next.next.value).toBe(1);
    expect(reversed.next.next.next).toBeNull();
  });

  it('должен обрабатывать список из одного узла', () => {
    const list = new Node(1);
    const reversed = reverseLinkedList(list);
    
    expect(reversed.value).toBe(1);
    expect(reversed.next).toBeNull();
  });

  it('должен обрабатывать пустой список', () => {
    expect(() => reverseLinkedList(null)).toThrow();
  });

  it('должен выбрасывать ошибку при невалидных входных данных', () => {
    expect(() => reverseLinkedList({})).toThrow();
    expect(() => reverseLinkedList(123)).toThrow();
  });
}); 