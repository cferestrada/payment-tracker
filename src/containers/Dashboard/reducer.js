
export const initialState = {
  successMessage: '',
  error: false,
  payments: [
  ],
};


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SUCCESS_MESSAGE':
      return { ...state, successMessage: action.message, error: false };
    case 'SET_RECORD':
      return {
        ...state,
        payments: action.record,
        loading: false,
        error: false,
        total: 200.50,
      };
    default: return state;
  }
}
