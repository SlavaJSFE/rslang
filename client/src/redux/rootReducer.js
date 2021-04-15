import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import textBookReducer from './textBook/reducer';
import gameReducer from './miniGameWords/reducer';
import vocabularyStudyWordsReducer from './vocabulary/StudyWords/reducer';
import vocabularyDifficultWordsReducer from './vocabulary/DifficultWords/reducer';
import vocabularyDeletedWordsReducer from './vocabulary/DeletedWords/reducer';
import vocabularyAmountStudyWordsReducer from './vocabulary/AmountStudyWords/reducer';
import vocabularyReducer from './vocabulary/reducer';
import statisticsReducer from './statistics/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  vocabularyStudyWords: vocabularyStudyWordsReducer,
  vocabularyDifficultWords: vocabularyDifficultWordsReducer,
  vocabularyDeletedWords: vocabularyDeletedWordsReducer,
  vocabularyAmountStudyWords: vocabularyAmountStudyWordsReducer,
  user: userReducer,
  game: gameReducer,
  vocabulary: vocabularyReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
