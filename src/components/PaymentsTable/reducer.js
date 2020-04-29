export const initialState = {
  active_payment: null,
  active_action: '',
};


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_PAYMENT':
      return {
        ...state,
        active_payment: action.payment,
      };
    case 'SET_ACTIVE_ACTION':
      return {
        ...state,
        active_action: action.action,
      };
    case 'CLEAR_ACTIVE':
      return {
        ...state,
        active_action: null,
        active_payment: '',
      };
    default: return state;
  }
}
