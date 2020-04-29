import { useState, useEffect } from 'react';
import {
  Header,
  Modal,
} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { jsx } from '@emotion/core';
import { clearActive } from '../PaymentsTable/actions';
import headerStyles from './PaymentVisualizerStyles';
/** @jsx jsx */

const PaymentVisualizer = (props) => {
  const dispatch = useDispatch();

  const { payment } = props;
  const { active_action } = useSelector(state => state.control);
  const [isOpen, setIsopen] = useState(false);

  const handleClose = () => {
    dispatch(clearActive());
    setIsopen(false);
  };

  useEffect(() => {
    setIsopen(active_action === 'view');
  }, [active_action]);


  return (
    <Modal open={isOpen} closeIcon onClose={handleClose} centered={false} size="small">
      <Modal.Header css={headerStyles}>
        <Header as="h3" floated="left">
          Payment
        </Header>
        <Header as="h3" floated="right">
          {`${payment.date}`}
        </Header>
      </Modal.Header>
      <Modal.Content>
        <p>
          {payment.description}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Header as="h3" textAlign="right">
          {`Amount:  $${payment.amount}`}
        </Header>
      </Modal.Actions>
    </Modal>
  );
};

export default PaymentVisualizer;
