import React from 'react';
import { baseBoxStyles, colors } from '../../styles';
import styled from 'styled-components';

// import useStyles from './resultBox-style';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Typography } from '@mui/material';

interface ResultBoxProps {
  products: Array<any>;
}

const ResultBox: React.FC<ResultBoxProps> = ({ products }) => {
  console.log(products);
  return (
    <List>
      {!products.length ? (
        <EmptyResult>
          <ImageContainer>
            <img src="images/not-found.png" />
          </ImageContainer>
          <br />
          <h3>Your cart is empty</h3>
          <div />
          <div>{`Seems like you haven't started to buy`}</div>
        </EmptyResult>
      ) : (
        <div>product card in construction</div>
      )}
    </List>
  );
};

// const ResultBox: React.FC<ResultBoxProps> = ({ products }) => {
//   const classes = useStyles();

//   const renderProducts = () => {
//     if (!products.length) {
//       return (
//         <div className={classes.cartEmptyContainer}>
//           <ShoppingCartIcon fontSize="large" />
//           <br />
//           <Typography align="center">Your cart is empty</Typography>
//           <Typography align="center">{`Seems like you haven't chosen what to buy`}</Typography>
//         </div>
//       );
//     }
//     return products.map((p, idx) => (
//       <div key={idx} style={{ display: 'flex' }}>
//         <div style={{ width: '80px' }}>
//           <img alt={p.imageName[-3]} src={`/images/${p.imageName}`} style={{ width: '100%' }} />
//         </div>
//         <div>
//           <Typography>{p.name}</Typography>
//           <Typography>{p.description}</Typography>
//           <Typography>{`${p.price}${p.unitPrice === 'dollar' ? '$' : 'C'}`}</Typography>
//         </div>
//       </div>
//     ));
//   };

//   return <div className={classes.root}>{renderProducts()}</div>;
// };

const List = styled.div`
  ${baseBoxStyles};
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: ${colors.white};
  min-height: 300px;
`;

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
`;

const EmptyResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default ResultBox;
