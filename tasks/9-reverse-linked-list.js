/**
 * Узел односвязного списка
 * @param {any} value - Значение узла
 * @param {Node|null} next - Ссылка на следующий узел
 */
function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

/**
 * Реверсирует односвязный список
 * @param {Node} head - Головной узел списка
 * @returns {Node} Головной узел реверсированного списка
 */
function reverseLinkedList(head) {
  // Твой код здесь
}

module.exports = { Node, reverseLinkedList }; 