import { useState, useEffect } from 'react';
import {
  Button,
  Icon,
  Modal,
  Message,
  List,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';
import { clearActive } from '../PaymentsTable/actions';
import { deletePayment, setSuccessMessage } from '../../containers/Dashboard/actions';
/** @jsx jsx */

const ConfirmationModal = (props) => {
  const dispatch = useDispatch();
  const { payment } = props;
  const { active_action } = useSelector(state => state.control);
  const [isOpen, setIsopen] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = () => {
    dispatch(deletePayment(payment.id)).then(() => {
      setIsopen(false);
      dispatch(setSuccessMessage('Record deleted succesfully!'));
    }).catch((err) => {
      setErrorMessage(err.message);
    });
  };

  const handleClose = () => {
    dispatch(clearActive());
    setIsopen(false);
  };

  useEffect(() => {
    setIsopen(active_action === 'delete');
  }, [active_action]);


  return (
    <Modal open={isOpen} closeIcon onClose={handleClose} size="small">
      <Modal.Header content="Are you sure you want to remove this payment?" />
      <Modal.Content>
        { errorMessage && (
          <Message negative>
            <p>{errorMessage}</p>
          </Message>
        )}
        <List>
          <List.Item>
            <List.Header>Description:</List.Header>
            {payment.description}
          </List.Item>
          <List.Item>
            <List.Header>Date:</List.Header>
            {payment.date}
          </List.Item>
          <List.Item>
            <List.Header>Amount:</List.Header>
            {payment.amount}
          </List.Item>
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={handleClose}>
          <Icon name="remove" />
          No
        </Button>
        <Button color="green" onClick={submitHandler}>
          <Icon name="checkmark" />
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmationModal;
