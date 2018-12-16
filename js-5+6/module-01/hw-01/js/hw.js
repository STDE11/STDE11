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
let message;
const ANNIENTED = ' Отменено пользователем!';
const NOT_ACCESS = ' Доступ запрещен!';
const WELCOME = ' Добро пожаловать!';



if (login === null) {
    alert(ANNIENTED);
} else if (login !== ADMIN_LOGIN) {
    alert(NOT_ACCESS);
} else if ((password = prompt(' Введите пароль:')) === null) {
    alert(ANNIENTED);
} else if (password === ADMIN_PASSWORD) {
    alert(WELCOME);
} else {
    alert(NOT_ACCESS);
}
