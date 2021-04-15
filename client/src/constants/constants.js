import savannahImage from '../assets/images/safari.jpg';
import audioCallImage from '../assets/images/audiocall.jpg';
import sprintImage from '../assets/images/sprint.jpg';
import memoryImage from '../assets/images/memory.jpg';

export const server = 'https://rslang-server-slavajsfe.herokuapp.com';

export const CLICK_AWAY = 'clickaway';
export const sixSeconds = 6000;
export const HELLO = 'Привет';
export const GUEST = 'Гость';
export const IMAGE = 'image';

export const UNIT = 'РАЗДЕЛ';
export const UNIT_1 = 'Раздел 1';
export const UNIT_2 = 'Раздел 2';
export const UNIT_3 = 'Раздел 3';
export const UNIT_4 = 'Раздел 4';
export const UNIT_5 = 'Раздел 5';
export const UNIT_6 = 'Раздел 6';
export const DEFAULT_LEVEL = 0;

export const MAIN = 'main';
export const TEXTBOOK = 'textbook';
export const STATISTIC = 'statistic';
export const GAMES = 'games';
export const TEAM = 'team';
export const LOGIN = 'login';
export const REGISTRATION = 'registration';

export const gameNames = {
  savannah: 'savannah',
  audioCall: 'audiocall',
  sprint: 'sprint',
  memory: 'memory',
};

export const games = [
  {
    name: 'Savannah',
    path: '/games/savannah',
    className: 'savannah',
    type: 'savannah',
    image: savannahImage,
    rule: 'В игре Саванна сверху экрана будет падать слово на английском. Пока оно падает, вам необходимо выбрать правильный перевод этого слова из предложенных вариантов. В каждой игре участвует максимум 20 слов. Вам даётся 5 жизней. Игра завершаетя, когда у вас заканчиваются жизни или когда закончатся слова. За правильные ответы вы получаете баллы по прогрессивной системе. Удачи!',
  },
  {
    name: 'Audio Call',
    path: '/games/audiocall',
    className: 'audiocall',
    type: 'audiocall',
    image: audioCallImage,
    rule: 'В игре Аудиовызов вы услышите произношение слова на английском. Вам необходимо выбрать правильный перевод этого слова из предложенных вариантов. В каждой игре участвует максимум 20 слов. Вам даётся 5 жизней. Игра завершаетя, когда у вас заканчиваются жизни или когда закончатся слова. За правильные ответы вы получаете баллы по прогрессивной системе. Удачи!',
  },
  {
    name: 'Sprint',
    path: '/games/sprint',
    className: 'sprint',
    type: 'sprint',
    image: sprintImage,
    rule: 'В игре Спринт вам будет предлагаться слово на английском и его перевод. Необходимо ответить, является ли перевод верным или нет, нажав на одну из кнопок "Верно" или "Неверно". На прохождение игры даётся одна минута. За это время вам необходимо дать как можно больше правильных ответов. В каждой игре участвует максимум 20 слов. Вам даётся 5 жизней. Игра завершаетя, когда у вас заканчиваются жизни или когда закончатся слова. За правильные ответы вы получаете баллы по прогрессивной системе. Удачи!',
  },
  {
    name: 'Memory',
    path: '/games/memory',
    className: 'memory',
    type: 'memory',
    image: memoryImage,
    rule: 'В игре Мемори есть 16 карточек со словами на английском и соответсвующими им словами на русском. Всего 8 пар слов (оригинал - перевод). В начале игры на несколько секунд вы увидите все слова, после чего карточки будут перевёрнуты. Ваша задача попытаться запомнить где какое слово находится и за одну минуту раскрыть все пары слов. Удачи!',
  },
];
