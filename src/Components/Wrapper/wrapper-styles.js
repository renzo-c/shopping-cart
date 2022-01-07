import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '3em'
  },
  html: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: (props) => props.color,
    zIndex: -10
  }
});

export default useStyles;
