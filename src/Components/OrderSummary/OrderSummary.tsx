import React from 'react';
import { Typography, Button } from '@mui/material';
import useStyles from '@styles/container-style';
import useStylesOrderSumary from './orderSummary-style';

const OrderSummary = () => {
  const classes = useStyles({ maxWidth: '400px' });
  const classesOrderSummary = useStylesOrderSumary();

  return (
    <div className={classes.root}>
      <div className={classesOrderSummary.root}>
        <Typography>Products:</Typography>
        <Typography>Shipping Cost:</Typography>
        <Typography>Taxes:</Typography>
        <br />
        <Typography>Total:</Typography>
      </div>
      <br />
      <Button variant="outlined" fullWidth disabled={true} className={classesOrderSummary.button}>
        Complete Order
      </Button>
    </div>
  );
};

export default OrderSummary;
