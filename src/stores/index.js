import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from 'reducers';

const middlewares = [];
middlewares.push(thunk);
if (__DEV__) {
  middlewares.push(logger);
}

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
  ),
);
