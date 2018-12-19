'use strict';

//HW
/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/



const ADMIN_LOGIN = 'admin';//
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';//

let login = prompt(' Введите логин:');
let password;

const MESSAGE_CANCELED = ' Отменено пользователем!';
const MESSAGE_DENIED = ' Доступ запрещен!';
const MESSAGE_GRANTED = ' Добро пожаловать!';



if (login === null) {

    alert(MESSAGE_CANCELED);

} else if (login !== ADMIN_LOGIN) {

    alert(MESSAGE_DENIED);

} else {

   (password = prompt(' Введите пароль:'))

   if (password === null) {

       alert(MESSAGE_CANCELED );

   } else if (password !== ADMIN_PASSWORD) {

       alert(MESSAGE_DENIED);

   } else {

    alert(MESSAGE_GRANTED);

   }
   
}


