import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

export const reducers = combineReducers({
  firebase: firebaseReducer,
});
