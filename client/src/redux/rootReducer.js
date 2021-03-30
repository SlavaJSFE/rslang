import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import textBookReducer from './textBook/reducer';
import gameReducer from './miniGameWords/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  user: userReducer,
  game: gameReducer,
});

export default rootReducer;
