import { createStore, compose, applyMiddleware } from 'redux';

import { rootReducer } from './modules/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware()),
  );

  return store;
}
