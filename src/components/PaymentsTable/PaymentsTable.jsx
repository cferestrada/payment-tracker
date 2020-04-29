import React from 'react';
import {
  Button,
  Table,
  Icon,
} from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePayment, setActiveAction } from './actions';

const PaymentsTable = () => {
  const dispatch = useDispatch();

  const { payments = [] } = useSelector(state => state.record);

  const handleClickView = (id) => {
    dispatch(setActivePayment(id));
    dispatch(setActiveAction('view'));
  };

  const handleClickEdit = (id) => {
    dispatch(setActivePayment(id));
    dispatch(setActiveAction('edit'));
  };

  const handleClickCreate = () => {
    dispatch(setActiveAction('create'));
  };

  const handleClickRemove = (id) => {
    dispatch(setActivePayment(id));
    dispatch(setActiveAction('delete'));
  };

  const items = payments.map(payment => (
    <Table.Row>
      <Table.Cell>{payment.description}</Table.Cell>
      <Table.Cell>{payment.date}</Table.Cell>
      <Table.Cell>{`$${payment.amount}`}</Table.Cell>
      <Table.Cell collapsing>
        <Button.Group icon>
          <Button onClick={() => handleClickView(payment.id)}>
            <Icon name="expand arrows alternate" />
          </Button>
          <Button onClick={() => handleClickEdit(payment.id)}>
            <Icon name="edit outline" />
          </Button>
          <Button onClick={() => handleClickRemove(payment.id)}>
            <Icon name="remove" />
          </Button>
        </Button.Group>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table celled>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Button
              onClick={() => handleClickCreate()}
              floated="right"
              icon
              labelPosition="left"
              primary
              size="small"
            >
              <Icon name="add" />
            Add New Payment
            </Button>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default PaymentsTable;
