import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@material-ui/core';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> acd2cbd4e89f63db60a6662e5559acdd2347e979
import { connect } from 'react-redux';

import useStyles from './WordStyles';
import { server } from '../../constants/constants';
import { setHardWord, setEasyWord } from '../../redux/textBook/actions';

<<<<<<< HEAD
const Word = ({
  word,
  isTranslation,
  isButtonsActive,
  setHardWordConnect,
  setEasyWordConnect,
  userData,
}) => {
=======
const Word = ({ word, isTranslation, isButtonsActive }) => {
>>>>>>> acd2cbd4e89f63db60a6662e5559acdd2347e979
  const classes = useStyles();

  const playAudio = async (audioSrc) => {
    const audio = new Audio(audioSrc);
    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const onPlay = async () => {
    await playAudio(`${server}${word.audio}`);
    await playAudio(`${server}${word.audioMeaning}`);
    await playAudio(`${server}${word.audioExample}`);
  };

<<<<<<< HEAD
  const onHardWord = async () => {
    await setHardWordConnect(word.id, userData);
  };

  const onEasyWord = async () => {
    await setEasyWordConnect(word.id, userData);
=======
  const setHardWord = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjBlMzdlMzNiM2M4MDAxNTAwZWYzZiIsImlhdCI6MTYxNjk2MjQ1NSwiZXhwIjoxNjE2OTc2ODU1fQ.Sv1roL2te5DRUsWi9ZjvLsc5ldmGJEVhwX_8wE_WFEs';
    try {
      await axios.post(
        `https://rslang-server-slavajsfe.herokuapp.com/users/6060e37e33b3c8001500ef3f/words/${word.id}`,
        {
          difficulty: 'hard',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
>>>>>>> acd2cbd4e89f63db60a6662e5559acdd2347e979
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={word.word}
        image={`${server}${word.image}`}
      />
      <CardContent className={classes.content}>
        <Box className={classes.header}>
          <Box className={classes.headerText}>
            <Typography variant="h5" component="h3">
              {word.word}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {word.transcription}
            </Typography>
          </Box>
          <Button onClick={onPlay}>
            <VolumeUpRoundedIcon />
          </Button>
        </Box>
        {isTranslation && (
          <Box>
            <Typography
              color="textPrimary"
              component="p"
              className={classes.wordTranslate}
            >
              {word.wordTranslate}
            </Typography>
          </Box>
        )}
        <Box className={classes.textMeaningTranslate}>
          <Typography
            color="textPrimary"
            component="p"
            dangerouslySetInnerHTML={{ __html: word.textMeaning }}
          />
          {isTranslation && (
            <Typography
              color="textPrimary"
              component="p"
              variant="body2"
              dangerouslySetInnerHTML={{ __html: word.textMeaningTranslate }}
            />
          )}
        </Box>
        <Box>
          <Typography
            component="p"
            color="textPrimary"
            dangerouslySetInnerHTML={{ __html: word.textExample }}
          />
          {isTranslation && (
            <Typography
              component="p"
              color="textPrimary"
              variant="body2"
              dangerouslySetInnerHTML={{ __html: word.textExampleTranslate }}
            />
          )}
        </Box>
        {isButtonsActive && (
          <Box className={classes.buttons}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.hardBtn}
              onClick={onHardWord}
            >
              Сложно
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.deleteBtn}
              onClick={onEasyWord}
            >
              Удалить
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  isTranslation: state.textBookPage.settings.optional.isTranslation,
  isButtonsActive: state.textBookPage.settings.optional.isButtonsActive,
<<<<<<< HEAD
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  setHardWordConnect: setHardWord,
  setEasyWordConnect: setEasyWord,
})(Word);
=======
});

export default connect(mapStateToProps)(Word);
>>>>>>> acd2cbd4e89f63db60a6662e5559acdd2347e979
