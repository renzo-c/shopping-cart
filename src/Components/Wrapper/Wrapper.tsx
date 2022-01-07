import React from 'react';
import useStyles from './wrapper-styles';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const classes = useStyles({ color: '#F7F7F9' });
  return (
    <div className={classes.root}>
      <div className={classes.html}></div>
      {children}
    </div>
  );
};

export default Wrapper;
