/**
 * Узел дерева
 * @param {any} value - Значение узла
 * @param {Node[]} children - Дочерние узлы
 */
function Node(value, children = []) {
  this.value = value;
  this.children = children;
}

/**
 * Выполняет обход дерева в ширину
 * @param {Node} root - Корневой узел дерева
 * @returns {any[]} Массив значений в порядке обхода
 */
function breadthFirstTraversal(root) {
  // Твой код здесь
}

module.exports = { Node, breadthFirstTraversal }; 