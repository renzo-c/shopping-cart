import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchBox, ResultBox } from 'Components';
import { baseContainerStyles } from '../../styles';
import {products} from './products';

const SearchContainer = () => {
  const [term, setTerm] = useState('');
  console.log({ term });
  return (
    <Container>
      <SearchBox onChangeTerm={setTerm} term={term} />
      <ResultBox products={products}/>
    </Container>
  );
};

const Container = styled.div`
  ${baseContainerStyles};
  flex-direction: column;
`;
// import { ResultBox, SearchBox } from 'Components';
// import useStyles from '@styles/container-style';

// const SearchContainer = () => {
//   const classes = useStyles({ maxWidth: '350px' });

//   return (
//     <div className={classes.root}>
//       <SearchBox />
//       <br/>
//       <ResultBox products={products} />
//     </div>
//   );
// };

export default SearchContainer;
