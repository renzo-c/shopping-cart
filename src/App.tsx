import React from 'react';
import { DeliveryEstimator, SearchContainer, OrderSummary } from './Components';
import { Grid } from '@mui/material';
import { Layout } from 'Components';
import GlobalStyles from './styles';
import { gql, useQuery } from '@apollo/client';

const PRODUCTS = gql`
  query ListProducts {
    getProducts {
      name
      description
      unitPrice
      imageUrl
      price
    }
  }
`;

const App = () => {
  console.log(process.env.NODE_ENV);
  const { loading, error, data } = useQuery(PRODUCTS);
console.log(data)
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`ERROR ${error.message}`}</div>;

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
