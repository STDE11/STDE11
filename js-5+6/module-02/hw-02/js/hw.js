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
const MESSAGE_NOT_NUMBERS_ENTERED = `Было введено не число, попробуйте еще раз`
const MESSAGE_TOTAL_SUM = `Общая сумма чисел равна `

do {
  
  userInput = prompt('Введите число');
 
  if (Number.isNaN(+userInput) || userInput === '' || userInput === ' ') {
    
    alert(MESSAGE_NOT_NUMBERS_ENTERED); 

  } else if (userInput !== null ) {

    numbers.push(+userInput);

  } 

 
} while (userInput !== null);

      console.log(numbers);
if (numbers.length > 0) {
    for (let i of numbers) {
      total += i;
    }

  alert(MESSAGE_TOTAL_SUM + total);
} 




