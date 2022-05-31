import React from 'react';
import useStyles from './resultBox-style';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';
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

interface ResultBoxProps {
  products: Array<any>;
}

const ResultBox: React.FC<ResultBoxProps> = ({ products }) => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(PRODUCTS);
console.log({data})
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{`ERROR ${error.message}`}</div>;

  const renderProducts = () => {
    if (!products.length) {
      return (
        <div className={classes.cartEmptyContainer}>
          <ShoppingCartIcon fontSize="large" />
          <br />
          <Typography align="center">Your cart is empty</Typography>
          <Typography align="center">{`Seems like you haven't chosen what to buy`}</Typography>
        </div>
      );
    }
    return products.map((p, idx) => (
      <div key={idx} style={{display: 'flex'}}>
        <div style={{ width: '80px' }}>
          <img alt={p.imageName[-3]} src={`/images/${p.imageName}`} style={{ width: '100%' }} />
        </div>
        <div>
          <Typography>{p.name}</Typography>
          <Typography>{p.description}</Typography>
          <Typography>{`${p.price}${p.unitPrice === 'dollar' ? '$' : 'C'}`}</Typography>
        </div>
      </div>
    ));
  };

  return <div className={classes.root}>{renderProducts()}</div>;
};

export default ResultBox;
