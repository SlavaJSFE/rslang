import savannahImage from '../assets/images/safari.jpg';
import audioCallImage from '../assets/images/audiocall.jpg';
import sprintImage from '../assets/images/sprint.jpg';
import memoryImage from '../assets/images/memory.jpg';

// const server = 'http://localhost:5000/';
const server = 'https://rslang-server-slavajsfe.herokuapp.com/';

const games = [
  {
    name: 'Savannah',
    path: '/games/savannah',
    className: 'savannah',
    image: savannahImage,
  },
  {
    name: 'Audio Call',
    path: '/games/audiocall',
    className: 'audiocall',
    image: audioCallImage,
  },
  {
    name: 'Sprint',
    path: '/games/sprint',
    className: 'sprint',
    image: sprintImage,
  },
  {
    name: 'Memory',
    path: '/games/memory',
    className: 'memory',
    image: memoryImage,
  },
];

export { server, games };
