import { makeStyles } from '@material-ui/core/styles';
import theme from '../../constants/theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 13px',
    marginBottom: '30px',
    borderRadius: '20px',
    backgroundColor: '#FAF1DA',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      flexBasis: '100%',
    },
  },
  media: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
  },
  content: {
    width: '500px',
    maxWidth: '500px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    display: 'flex',
    alignItems: 'center',
  },
  wordTranslate: {
    marginBottom: '10px',
  },
  textMeaningTranslate: {
    marginBottom: '10px',
  },
  buttons: {
    marginTop: '10px',
  },
  hardBtn: {
    marginRight: '10px',
  },
});

export default useStyles;
