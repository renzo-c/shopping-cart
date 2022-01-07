import React from 'react';
import { ResultBox, SearchBox } from 'Components';
import useStyles from '@styles/container-style';
import {products} from './products';

const SearchContainer = () => {
  const classes = useStyles({ maxWidth: '350px' });

  return (
    <div className={classes.root}>
      <SearchBox />
      <br/>
      <ResultBox products={products} />
    </div>
  );
};

export default SearchContainer;
