import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '@styles/container-style';
import useStylesDeliveryEstimator from './deliveryEstimator-style';
import clsx from 'clsx';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const DeliveryEstimator = () => {
  const classes = useStyles({ maxWidth: '400px' });
  const classesOrderSummary = useStylesDeliveryEstimator();

  return (
    <div className={clsx(classes.root, classesOrderSummary.root)}>
      <LocalShippingIcon color='primary' />
      <Box pr={1}/>
      <Typography>Buy now and get it by <b>06/06/2023</b></Typography>
    </div>
  );
};

export default DeliveryEstimator;
