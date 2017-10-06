import {combineReducers} from "redux";

import sailerReducer from './sailerReducer';
import journeyReducer from './journeyReducer';
import jokes from './jokesReducer';

export default combineReducers({
  sailerReducer,
  journeyReducer,
  jokes,
});
