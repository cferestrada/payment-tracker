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
import { updatePayment, setSuccessMessage } from '../../containers/Dashboard/actions';
import PaymentForm from '../PaymentForm';
/** @jsx jsx */

const PaymentEditor = (props) => {
  const dispatch = useDispatch();
  const { payment } = props;
  const { active_action } = useSelector(state => state.control);
  const [isOpen, setIsopen] = useState(false);

  const [validForm, setValidForm] = useState(false);
  const [description, setDescription] = useState(payment.description);
  const [date, setDate] = useState(payment.date);
  const [amount, setAmount] = useState(payment.amount);
  const [errorMessage, setErrorMessage] = useState('');


  const submitHandler = () => {
    const payload = {
      id: payment.id, description, amount, date,
    };
    if (validForm) {
      dispatch(updatePayment(payload)).then(() => {
        dispatch(clearActive());
        dispatch(setSuccessMessage('Record updated succesfully!'));
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
    setIsopen(active_action === 'edit');
  }, [active_action]);


  return (
    <Modal open={isOpen} closeIcon onClose={handleClose} centered={false} size="small">
      <Modal.Header content="Edit Payment" />
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

export default PaymentEditor;
