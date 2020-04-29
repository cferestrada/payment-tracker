
const SET_ACTIVE_PAYMENT = 'SET_ACTIVE_PAYMENT';
const SET_ACTIVE_ACTION = 'SET_ACTIVE_ACTION';
const CLEAR_ACTIVE = 'CLEAR_ACTIVE';


export const setActivePayment = payment => ({
  type: SET_ACTIVE_PAYMENT,
  payment,
});


export const setActiveAction = action => ({
  type: SET_ACTIVE_ACTION,
  action,
});

export const clearActive = () => ({
  type: CLEAR_ACTIVE,
});
