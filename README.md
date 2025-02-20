# Задачи для собеседования Front-end разработчика (JavaScript)

Кандидат сам выбирает задачи которые он хочет решить и по итогу решенных задач будет выставлен итоговый балл.

## 1. Цепочка промисов (Сложность: 7/10)

Напишите функцию `fetchSequentially`, которая принимает массив URL и возвращает массив результатов в том же порядке, что и URL. Используйте цепочку промисов для последовательного выполнения запросов. Напишите тесты, проверяющие порядок и корректность результатов.

## 2. MyFlat (Сложность: 6/10)

Реализуйте метод `myFlat` для массивов, который работает аналогично `Array.prototype.flat`. Метод должен поддерживать любую вложенность, сделать никак прототип, а прсото функцию.

## 3. Контекст функции и объекта (Сложность: 5/10)

Создайте объект `calculator` с методами `add`, `subtract`, `multiply`, `divide`. Напишите функцию `executeOperation`, которая принимает метод `calculator` и выполняет его с правильным контекстом. Также результат математических операций должен накапливаться в объекте `calculator` и в конце цепочки рассчетов должен быть выведен правильный результат.

## 4. var vs let (Сложность: 4/10)

Напишите код, который демонстрирует разницу между `var` и `let` в циклах и блочной области видимости. Напишите тесты, которые показывают, как переменные ведут себя в разных контекстах.

## 5. Прототип forEach (Сложность: 5/10)

Реализуйте метод `myForEach` для массивов, который работает аналогично `Array.prototype.forEach`. Напишите тесты, проверяющие корректность выполнения колбэка для каждого элемента массива.

## 6. Callback с математической формулой (Сложность: 3/10)

Напишите функцию `calculate`, которая принимает массив чисел и колбэк, применяющий математическую операцию к каждому элементу. Напишите тесты, проверяющие работу функции с разными операциями (например, возведение в квадрат, вычисление факториала).

## 7. Создание EventBus (Сложность: 7/10)

Реализуйте простой `EventBus`, который поддерживает методы `on`, `off` и `emit`. Метод `on` регистрирует обработчик события, `off` удаляет его, а `emit` вызывает все обработчики для указанного события. Напишите тесты, проверяющие корректность работы всех методов.

## 8. Максимальная сумма подмассива (Сложность: 7/10)

Напишите функцию `maxSumSubarray`, которая принимает массив чисел и число `k`. Функция должна возвращать максимальную сумму подмассива длиной `k`.

## 9. Реверс односвязного списка (Сложность: 6/10)

Напишите функцию `reverseLinkedList`, которая принимает односвязный список и возвращает его в обратном порядке.

## 10. Обход дерева в ширину (Сложность: 7/10)

Не используя рекурсию, напишите функцию `breadthFirstTraversal`, которая принимает дерево и возвращает массив значений в порядке обхода в ширину.

## Максимальная сумма баллов: 47
