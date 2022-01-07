import React from 'react';
import { Input } from '@mui/material';
import useStyles from './searchBox-style';

const SearchBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Input
        disableUnderline
        className={classes.input}
        placeholder="Search products ..."
      />
    </div>
  );
};

export default SearchBox;
