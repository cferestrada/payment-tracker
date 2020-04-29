/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const mode = process.env.REACT_APP_MODE;
/** Will only expose rstore in devtools for dev */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const initializeStore = (preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
