import { makeStyles } from '@mui/styles';
import { container } from '../../styles/globalStyles';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    ...container,
    minHeight: '450px',
  },
  cartEmptyContainer: {
    position: 'absolute',
    top: '35%',
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em'
  }
});

export default useStyles;
