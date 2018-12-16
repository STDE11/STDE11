//Модуль 9 - Домашнее задание

'use strict';
/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/


const jsTime = document.querySelector('.js-time');
const jsStart = document.querySelector('.js-start');
const jsTakeLap = document.querySelector('.js-take-lap');
const jsReset = document.querySelector('.js-reset')
    jsReset.disabled = true; 
const jsLaps = document.querySelector('.js-laps');



class Stopwatchs {
    
    constructor({ onTick }) {
        this.startTime = null;
        this.currentTime = null;
        this.deltatime = 0;
        this.pauseTime = 0;
        this.timerId = null;
        this.isActive = false;
        this.isActiveCounter = false;
        this.onTick = onTick;
        this.stopTime = null;
        this.lapArr = [];
       
    }

    formatTime(el) {
        const time = new Date(el);
        const data = new Date(time);

        const min = data.getMinutes();
        const minutes = min < 10 ? '0' + min : '' + min;

        const sec = data.getSeconds();
        const seconds = sec < 10 ? '0' + sec : '' + sec;

        const ms = Number.parseInt(data.getMilliseconds() / 100) + '';

        return { minutes, seconds, ms };
    
    }
    
   
    start() {
        
        if (!this.isActive) {
            this.isActive = true;
            jsStart.textContent = 'Pause';
            if (!this.isActiveCounter) {
                this.startTime = Date.now();
                this.isActiveCounter = true;
                jsReset.disabled = false; 
            
            }
            
            this.timerId = setInterval(() => {
                this.currentTime = Date.now();
                this.deltatime = this.currentTime - this.startTime; 
                const time = this.formatTime(this.deltatime);
                this.onTick(time);
            }, 100);

        } else {
            jsStart.textContent = 'Continue';
            this.pauseTime = this.deltatime;
            this.isActive = false;
            clearInterval(this.timerId);
            const time = this.formatTime(this.pauseTime);
            this.onTick(time);
        }
    }

    takeLap() {
        this.lapArr.push(this.deltatime);
        console.log('lapArr:', this.lapArr);
        
        const lapElem = document.createElement('li');
        
        const time = this.formatTime(this.deltatime);
       
        const lapTime = `${time.minutes}:${time.seconds}.${time.ms}`;
        
        lapElem.textContent = lapTime;
                
        jsLaps.append(lapElem);

    }

    reset() {
        clearInterval(this.timerId);
        jsStart.textContent = 'Start';
        this.startTime = null;
        this.deltatime = 0;
        this.pauseTime = 0;
        this.timerId = null;
        this.isActive = false;
        this.isActiveCounter = false;
        jsReset.disabled = true;
        this.onTick({minutes: '00', seconds: '00', ms: '0'})
        this.lapArr = [];
        jsTime.textContent = `00:00.0`;

    }
}

const parentA = new Stopwatchs({
    onTick: updateWatch,
});

jsStart.addEventListener('click', parentA.start.bind(parentA));
jsTakeLap.addEventListener('click', parentA.takeLap.bind(parentA));
jsReset.addEventListener('click', parentA.reset.bind(parentA));


function updateWatch({minutes, seconds, ms}) {
    jsTime.textContent = `${minutes}:${seconds}.${ms}`
    };
