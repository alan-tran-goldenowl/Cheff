import {
  createStore
} from 'redux';

import { FireBase } from 'constants';
import { reducers } from 'reducers';

const initialState = {}
export const store = createStore(reducers, initialState);

const rrfConfig = {
  userProfile: 'users'
}
export const rrfProps = {
   firebase: FireBase,
  config: rrfConfig,
  dispatch: store.dispatch
}
