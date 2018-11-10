import { combineReducers } from 'redux';
import measurements from './measurements';

const reducer = combineReducers({
  measurements,
});

export default reducer;
