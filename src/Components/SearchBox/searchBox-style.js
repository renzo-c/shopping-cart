import { makeStyles } from '@mui/styles';
import { container } from '../../styles/globalStyles';

const useStyle = makeStyles({
  root: {
    ...container,
  },
  input: {
    textDecoration: 'none',
  }
});

export default useStyle;
