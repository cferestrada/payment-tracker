import record_mock from './record_mock';
import {
  updatePaymentAPI, getPaymentsAPI, createPaymentAPI, deletePaymentAPI,
} from '../../helpers/api';

const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
const SET_RECORD = 'SET_RECORD';


export const DashboardActionTypes = {
  SET_SUCCESS_MESSAGE,
  SET_RECORD,
};

export const setSuccessMessage = message => ({
  type: SET_SUCCESS_MESSAGE,
  message,
});


export const setRecord = record => ({
  type: SET_RECORD,
  record,
});

export function getRecord() {
  return (dispatch) => {
    dispatch(setRecord(record_mock));
  };
}

export const getPayments = () => dispatch => getPaymentsAPI()
  .then((data) => {
    if (data.status !== 200) {
      throw new Error('An error ocurred while getting your payments.');
    }
    return data;
  })
  .then(response => response.json())
  .then(res => dispatch(setRecord(res)));

export const deletePayment = id => dispatch => deletePaymentAPI(id)
  .then((data) => {
    if (data.status !== 200) {
      throw new Error('An error ocurred while deleting the payment. Please try again.');
    }
    return data;
  })
  .then(response => response.json())
  .then(() => dispatch(getPayments()));

export const updatePayment = payment => dispatch => updatePaymentAPI(payment)
  .then((data) => {
    if (data.status !== 200) {
      throw new Error('An error ocurred while updating your payment. Please try again.');
    }
    return data;
  })
  .then(response => response.json())
  .then(() => dispatch(getPayments()));

export const createPayment = payment => dispatch => createPaymentAPI(payment)
  .then((data) => {
    if (data.status !== 201) {
      throw new Error('An error ocurred while creating the payment. Please try again.');
    }
    return data;
  })
  .then(response => response.json())
  .then(() => dispatch(getPayments()));
