import {
  GAMES, MAIN, STATISTIC, TEAM, TEXTBOOK, LOGIN, REGISTRATION,
} from '../../../constants/constants';

export default function defineLocation(location) {
  if (location.includes(TEXTBOOK)) {
    return TEXTBOOK;
  }
  if (location.includes(GAMES)) {
    return GAMES;
  }
  if (location.includes(STATISTIC)) {
    return STATISTIC;
  }
  if (location.includes(TEAM)) {
    return TEAM;
  }
  if (location.includes(LOGIN)) {
    return LOGIN;
  }
  if (location.includes(REGISTRATION)) {
    return REGISTRATION;
  }

  return MAIN;
}
