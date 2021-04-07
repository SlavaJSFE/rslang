import savannahImage from '../assets/images/safari.jpg';
import audioCallImage from '../assets/images/audiocall.jpg';
import sprintImage from '../assets/images/sprint.jpg';
import memoryImage from '../assets/images/memory.jpg';

const DEFAULT_LEVEL = 0;
const server = 'https://rslang-server-slavajsfe.herokuapp.com/';

const gameNames = {
  savannah: 'savannah',
  audioCall: 'audiocall',
  sprint: 'sprint',
  memory: 'memory',
};

const games = [
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

export {
  server, games, DEFAULT_LEVEL, gameNames,
};
