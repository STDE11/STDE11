'use strict';


//Task - 04

/*
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

const DELAY = 1000;

let goodsAmount = 100;


function processOrder(amount) {
  // const DELAY = 1000;
  // let goodsAmount = 100;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!Number.isNaN(Number(amount))) {
        
        if (amount <= goodsAmount) {
          resolve("Ваш заказ готов!");
        } 
          resolve("К сожалению на складе недостаточно товаров!");
      }

      reject("Некоректный ввод!")
      
    }, DELAY)
  })
  
}



// Вызовы функции для проверки
processOrder(50)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(100)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(101)
  .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder(500)
  .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(result => console.log(result))
  .catch(err => console.log(err)); // Некоректный ввод!



// const executed = "Ваш заказ готов!";
// const declined = "К сожалению на складе недостаточно товаров!";
// const verification = "";
// const inCorrectly = "Некоректный ввод!";