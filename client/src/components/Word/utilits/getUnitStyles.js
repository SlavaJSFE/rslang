import { makeStyles } from '@material-ui/styles';
import {
  colorUnit1, colorUnit2, colorUnit3, colorUnit4, colorUnit5, colorUnit6, tertiaryColor,
} from '../../../constants/colors';

export default function getUnitStyles(unitNumber) {
  let color = colorUnit1;

  if (unitNumber === 2) {
    color = colorUnit2;
  } else if (unitNumber === 3) {
    color = colorUnit3;
  } else if (unitNumber === 4) {
    color = colorUnit4;
  } else if (unitNumber === 5) {
    color = colorUnit5;
  } else if (unitNumber === 6) {
    color = colorUnit6;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '5px 13px',
      marginBottom: '30px',
      borderRadius: '20px',
      border: `3px solid ${color}`,
      backgroundColor: tertiaryColor,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        flexBasis: '100%',
      },
    },
    unitMark: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: '23px',
      right: '25px',
      padding: '0 20px',
      height: '40px',
      borderRadius: '10px',
      backgroundColor: color,
      color: tertiaryColor,
      fontSize: '14px',
      fontWeight: 'bold',
      userSelect: 'none',
    },
  }));
  const classes = useStyles();

  return classes;
}
