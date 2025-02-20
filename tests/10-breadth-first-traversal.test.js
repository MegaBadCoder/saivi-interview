const { Node, breadthFirstTraversal } = require('../tasks/10-breadth-first-traversal');

describe('breadthFirstTraversal', () => {
  it('должен выполнять обход дерева в ширину', () => {
    const tree = new Node(1, [
      new Node(2, [
        new Node(4),
        new Node(5)
      ]),
      new Node(3, [
        new Node(6),
        new Node(7)
      ])
    ]);

    expect(breadthFirstTraversal(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('должен обрабатывать дерево из одного узла', () => {
    const tree = new Node(1);
    expect(breadthFirstTraversal(tree)).toEqual([1]);
  });

  it('должен выбрасывать ошибку при невалидных входных данных', () => {
    expect(() => breadthFirstTraversal(null)).toThrow();
    expect(() => breadthFirstTraversal({})).toThrow();
    expect(() => breadthFirstTraversal(123)).toThrow();
  });
}); 