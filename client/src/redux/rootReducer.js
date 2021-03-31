import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import textBookReducer from './textBook/reducer';
import gameReducer from './miniGameWords/reducer';
// import vocabularyStudyWordsReducer from './vocabulary/reducer';
import vocabularyDifficultWordsReducer from './vocabulary/reducer';
import vocabularyDeletedWordsReducer from './vocabulary/reducerDeletedWords';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  // vocabularyStudyWords: vocabularyStudyWordsReducer,
  vocabularyDifficultWords: vocabularyDifficultWordsReducer,
  vocabularyDeletedWords: vocabularyDeletedWordsReducer,
  user: userReducer,
  game: gameReducer,
});

export default rootReducer;
