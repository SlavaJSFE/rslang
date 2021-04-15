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
    rule: 'bla bla sav',
  },
  {
    name: 'Audio Call',
    path: '/games/audiocall',
    className: 'audiocall',
    type: 'audiocall',
    image: audioCallImage,
    rule: 'bla bla aud',
  },
  {
    name: 'Sprint',
    path: '/games/sprint',
    className: 'sprint',
    type: 'sprint',
    image: sprintImage,
    rule: 'bla bla sprint',
  },
  {
    name: 'Memory',
    path: '/games/memory',
    className: 'memory',
    type: 'memory',
    image: memoryImage,
    rule: 'bla bla mem',
  },
];
