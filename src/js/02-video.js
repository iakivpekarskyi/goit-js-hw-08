



// Імпортуєм модуль vimeo player 
import Player from '@vimeo/player';


// Дадаємо до поеера метод throttle
import throttle from 'lodash.throttle';

// Отримуємо наш плеер з HTML 
const iframe = document.querySelector('iframe');

// Встановлюєм(ініціалізуємо) наш плеер в плеер VIMEO, щоб ним можна було керувати.
const player = new Player(iframe);

// В плеері додаємо слухач подій у вигляді методу "on" разом, потім як параметр передаємо подію "timeupdate" - яка починає працювати щойно час у відео змінюється. і другим параментром додаємо функцию, яка додає ключ в localStorage.
player.on('timeupdate', throttle(saveTime, 1000));

// Функція "saveTime" додає в localStorage ключ "videoplayer-current-time" і його значення в секундах.
function saveTime(event) {
   localStorage.setItem('videoplayer-current-time', JSON.stringify (event.seconds));
   console.log(set);

};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time',) || 0);
 

// Дадаємо до поеера метод "setCurrentTime", для того щоб вказати звідкіля треба починати відео. Для цього замість конкретного часу ми передаємо в параметр не секунди, а дані які ми записали в localStorage 

const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);




