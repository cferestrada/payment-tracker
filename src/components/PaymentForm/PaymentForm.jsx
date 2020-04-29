import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  TextArea,
  Grid,
} from 'semantic-ui-react';
import {
  DateInput,
} from 'semantic-ui-calendar-react';

const PaymentForm = (props) => {
  const {
    description,
    amount,
    date,
    setDescription,
    setDate,
    setAmount,
    setValidForm,
  } = props;

  const [errorDescription, setErrorDescription] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);

  const today = new Date();
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 7);

  const validateDescription = (value) => {
    if (!value) return false;
    const regex = /^.{1,255}$/;
    const valid = value.match(regex);
    return !!valid;
  };

  const validateDate = (value) => {
    if (!value) return false;
    const regex = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    const valid = value.match(regex);
    return !!valid;
  };

  const validateAmount = (value) => {
    if (!value) return false;
    const regex = /^(\d{1,5}|\d{0,5}\.\d{2})$/;
    const valid = value.match(regex);
    return !!valid;
  };

  const onChangeDescription = (value) => {
    setDescription(value);
    setErrorDescription(!validateDescription(value));
  };

  const onChangeDate = (value) => {
    setDate(value);
  };

  const onChangeAmount = (value) => {
    setAmount(value);
    setErrorAmount(!validateAmount(value));
  };

  useEffect(() => {
    if (description && amount && date) {
      const validDesc = validateDescription(description);
      const validAmount = validateAmount(amount.toString());
      const validDate = validateDate(date);
      setValidForm(validDesc && validAmount && validDate);
    }
  }, [description, amount, date]);

  return (
    <Form>
      <Grid reversed="mobile tablet vertically">
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <DateInput
            name="date"
            placeholder="Date"
            value={date || today}
            iconPosition="left"
            inline
            dateFormat="YYYY-MM-DD"
            minDate={minDate}
            maxDate={today}
            onChange={(e, { value }) => onChangeDate(value)}
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Form.Field
            id="form-textarea-create-description"
            control={TextArea}
            label="Description"
            placeholder="Description"
            value={description}
            maxLength="255"
            onChange={e => onChangeDescription(e.target.value)}
            error={errorDescription ? 'A description is required and should be 255 characters maximum.' : null}
          />
          <Form.Field
            id="form-input-create-amount"
            control={Input}
            label="Amount"
            error={errorAmount ? 'Please enter a valid amount.' : null}
            value={amount}
            onChange={e => onChangeAmount(e.target.value)}
          />
        </Grid.Column>
      </Grid>
    </Form>
  );
};

export default PaymentForm;
