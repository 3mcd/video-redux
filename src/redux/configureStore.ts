import { createStore, compose, applyMiddleware } from 'redux';

import videoMiddleware from '../lib/middleware/video';

import { rootReducer } from './modules/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(videoMiddleware())),
  );

  return store;
};

export default configureStore;
