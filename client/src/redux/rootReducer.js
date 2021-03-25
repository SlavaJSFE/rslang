import { combineReducers } from 'redux';
import textBookReducer from './textBook/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
});

export default rootReducer;
