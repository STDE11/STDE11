'use strict';

//HW


/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/


let userInput;
let input;
const numbers = [];
let total = 0;

do {
  
  userInput = prompt('Введите число');

  input = Number(userInput);
 
  if (Number.isNaN(input)) {
   alert(`Было введено не число, попробуйте еще раз`); 
  }

  numbers.push(input);

} while (userInput !== null);
 
  for (let i = 0; i < numbers.length; i += 1) {

    total += numbers[i];

  }

alert(`Общая сумма чисел равна ${total}`);

