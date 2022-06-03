import React from 'react';
import { DeliveryEstimator, SearchContainer, OrderSummary } from './Components';
import { Grid } from '@mui/material';
import { Layout } from 'Components';
import GlobalStyles from './styles';

const App = () => {
  console.log(process.env.NODE_ENV);

  return (
    // <Wrapper>
    <>
      <GlobalStyles />
      <Layout>
        <Grid container>
          <Grid item xs={6}>
            <SearchContainer />
          </Grid>
          <Grid item xs={6}>
            <DeliveryEstimator />
            <OrderSummary />
          </Grid>
        </Grid>
      </Layout>
    </>
    // </Wrapper>
  );
};

export default App;
