import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: props => props.maxWidth? props.maxWidth : '350px',
    margin: '1em auto' 
  }
});

export default useStyles;
