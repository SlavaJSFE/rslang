import { combineReducers } from 'redux';
import textBookReducer from './textBook/reducer';
import vocabularyDifficultWordsReducer from './vocabulary/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  vocabularyDifficultWordsPage: vocabularyDifficultWordsReducer,
});

export default rootReducer;
