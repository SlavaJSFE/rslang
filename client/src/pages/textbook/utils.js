import { LIST, VOCABULARY, SETTINGS } from './constants';

export default function defineLocation(location) {
  if (location.includes(LIST)) {
    return LIST;
  }
  if (location.includes(VOCABULARY)) {
    return VOCABULARY;
  }

  return SETTINGS;
}
