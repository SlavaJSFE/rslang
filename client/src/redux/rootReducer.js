import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import textBookReducer from './textBook/reducer';
import vocabularyDifficultWordsReducer from './vocabulary/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  vocabularyDifficultWordsPage: vocabularyDifficultWordsReducer,
  user: userReducer,
});

export default rootReducer;
