import { makeStyles } from '@material-ui/styles';
import savannahBackground from '../../../assets/images/534657.jpg';
import audioCallBackground from '../../../assets/images/4289830.jpg';
import sprintBackground from '../../../assets/images/savannah.jpg';
import memoryBackground from '../../../assets/images/spring.jpg';
import { AUDIO_CALL, MEMORY, SAVANNAH } from '../constants';

export default function getAppropriateStyles(game) {
  let background = sprintBackground;

  if (game === SAVANNAH) {
    background = savannahBackground;
  }
  if (game === AUDIO_CALL) {
    background = audioCallBackground;
  }
  if (game === MEMORY) {
    background = memoryBackground;
  }

  const useStyles = makeStyles({
    root: {
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
    },
    choiceLevel: {
      width: 'max-content',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });
  const classes = useStyles();

  return classes;
}
