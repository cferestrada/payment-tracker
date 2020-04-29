import { useState, useEffect } from 'react';
import {
  Button,
  Icon,
  Modal,
  Message,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';
import { clearActive } from '../PaymentsTable/actions';
import { createPayment, setSuccessMessage } from '../../containers/Dashboard/actions';
import PaymentForm from '../PaymentForm';
/** @jsx jsx */

const PaymentCreator = () => {
  const dispatch = useDispatch();
  const { active_action } = useSelector(state => state.control);
  const payment = { description: '', amount: '', date: '' };

  const [validForm, setValidForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [description, setDescription] = useState(payment.description);
  const [date, setDate] = useState(payment.date);
  const [amount, setAmount] = useState(payment.amount);
  const [isOpen, setIsopen] = useState(false);


  const submitHandler = () => {
    const payload = { description, amount, date };
    if (validForm) {
      dispatch(createPayment(payload)).then(() => {
        dispatch(clearActive());
        dispatch(setSuccessMessage('Record created succesfully!'));
      }).catch((err) => {
        setErrorMessage(err.message);
      });
    }
  };

  const handleClose = () => {
    dispatch(clearActive());
    setIsopen(false);
  };

  useEffect(() => {
    setIsopen(active_action === 'create');
  }, [active_action]);


  return (
    <Modal open={isOpen} closeIcon onClose={handleClose} centered={false} size="small">
      <Modal.Header content="Create New Payment" />
      <Modal.Content>
        { errorMessage && (
        <Message negative>
          <p>{errorMessage}</p>
        </Message>
        )}
        <PaymentForm
          description={description}
          amount={amount}
          date={date}
          setDescription={setDescription}
          setDate={setDate}
          setAmount={setAmount}
          setValidForm={setValidForm}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button disabled={!validForm} primary onClick={submitHandler}>
          <Icon name="save outline" />
            Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default PaymentCreator;
