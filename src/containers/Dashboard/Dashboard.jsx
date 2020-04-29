import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Segment,
  Header,
  Message,
} from 'semantic-ui-react';
import { getPayments } from './actions';
import PaymentsTable from '../../components/PaymentsTable';
import PaymentVisualizer from '../../components/PaymentVisualizer';
import PaymentEditor from '../../components/PaymentEditor';
import PaymentCreator from '../../components/PaymentCreator';
import ConfirmationModal from '../../components/ConfirmationModal';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { payments, successMessage } = useSelector(state => state.record);
  const { active_payment } = useSelector(state => state.control);

  const [payment, setPayment] = useState(null);

  const total = payments.reduce((a, b) => +a + +b.amount, 0);

  useEffect(() => {
    dispatch(getPayments());
  }, [dispatch]);

  useEffect(() => {
    if (active_payment && payments) {
      setPayment(payments.find(x => x.id === active_payment));
    }
  }, [active_payment, payments]);

  return (
    <React.Fragment>
      { payment && <PaymentVisualizer payment={payment} /> }
      { payment && <PaymentEditor payment={payment} /> }
      <PaymentCreator />
      { payment && <ConfirmationModal payment={payment} /> }
      <Segment inverted>
        <Grid verticalAlign="middle">
          <Grid.Column mobile={16} tablet={8} computer={12}>
            <Header inverted size="large">My payments</Header>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h3" color="blue" textAlign="right">
              Total amount :
              {`  $${total.toFixed(2)}`}
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
      { successMessage && (
        <Message success>
          <p>{successMessage}</p>
        </Message>
      )}
      {payments && <PaymentsTable payments={payments} />}
    </React.Fragment>
  );
};


export default Dashboard;
