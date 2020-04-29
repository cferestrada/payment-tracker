import { combineReducers } from 'redux';
import record from './containers/Dashboard/reducer';
import control from './components/PaymentsTable/reducer';

/** Register in here all components reducers */
const reducers = {
  record,
  control,
};

export default combineReducers({ ...reducers });
