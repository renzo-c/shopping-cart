import React from 'react';
import { DeliveryEstimator, Wrapper, SearchContainer, OrderSummary } from './Components';
import { Grid } from '@mui/material';

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={6}>
          <SearchContainer />
        </Grid>
        <Grid item xs={6}>
          <DeliveryEstimator />
          <OrderSummary />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default App;
