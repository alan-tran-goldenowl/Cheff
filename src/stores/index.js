import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

import { FireBase } from 'constants';
import { reducers } from 'reducers';

import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';

const middlewares = [
  thunk.withExtraArgument(getFirebase),
];

const initialState = {};
export const store = createStore(reducers, initialState, compose(
  applyMiddleware(...middlewares),
));

const rrfConfig = {
  userProfile: 'users',
};
export const rrfProps = {
  firebase: FireBase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
