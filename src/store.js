/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const mode = process.env.REACT_APP_MODE;
/** Will only expose rstore in devtools for dev */
const store = mode === 'development' ? createStore(rootReducer, composeWithDevTools()) : createStore(rootReducer);

export default store;
