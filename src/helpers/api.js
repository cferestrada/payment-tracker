
/**
 * API Endpoints
 */
const baseURL = 'https://5ea8bd9f0ebc1d00164901f4.mockapi.io/api';


const getPaymentsAPI = () => fetch(`${baseURL}/payments`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});

const createPaymentAPI = payment => fetch(`${baseURL}/payments`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payment),

});


const updatePaymentAPI = payment => fetch(`${baseURL}/payments/${payment.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payment),

});

const deletePaymentAPI = id => fetch(`${baseURL}/payments/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});

export {
  getPaymentsAPI,
  createPaymentAPI,
  updatePaymentAPI,
  deletePaymentAPI,
};
