// console.log(store.getState(), 'dadsadsadsadsadsadsadad');

import { createStore, applyMiddleware } from 'redux';
import squaresReducer from '../reducers/squaresReducer';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
  const store = createStore(
    squaresReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
