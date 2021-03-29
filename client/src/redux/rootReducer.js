import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import textBookReducer from './textBook/reducer';

const rootReducer = combineReducers({
  textBookPage: textBookReducer,
  user: userReducer,
});

export default rootReducer;
