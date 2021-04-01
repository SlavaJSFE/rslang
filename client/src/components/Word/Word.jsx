/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Box,
  Button,
  Chip,
} from '@material-ui/core';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';
import { connect } from 'react-redux';

import useStyles from './WordStyles';
import { server } from '../../constants/constants';
import RestoreBtn from '../../modules/Vocabulary/RestoreBtn/RestoreBtn';
import { setHardWord, deleteWord } from '../../redux/textBook/actions';
import { restoreWord } from '../../redux/vocabulary/actions';
import StudyResults from '../../modules/Vocabulary/CommonStudyResults/StudyResults';

const Word = ({
  word,
  isTranslation,
  isButtonsActive,
  setHardWordConnect,
  restoreWordConnect,
  deleteWordConnect,
  userData,
  isHard,
  isTextbook,
  isStudyStatistic,
}) => {
  const classes = useStyles();

  const playAudio = async (audioSrc) => {
    const audio = new Audio(audioSrc);
    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const onPlay = async () => {
    await playAudio(`${server}/${word.audio}`);
    await playAudio(`${server}/${word.audioMeaning}`);
    await playAudio(`${server}/${word.audioExample}`);
  };

  const onHardWord = async () => {
    await setHardWordConnect(word._id, userData);
  };

  const onDeleteWord = async () => {
    await deleteWordConnect(word._id, userData);
  };

  const onRestoreWord = async () => {
    await restoreWordConnect(word._id, userData);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={word.word}
        image={`${server}/${word.image}`}
      />
      <CardContent className={classes.content}>
        {!isTextbook && (
          <span className={classes.unitWords}>
            unit
            {' '}
            {word.group}
          </span>
        )}
        <Box className={classes.header}>
          <Box className={classes.headerText}>
            <Typography variant="h5" component="h3">
              {word.word}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {word.transcription}
            </Typography>
          </Box>
          <Box>
            {isHard === 'hard' && (
              <Chip
                classes={{ root: classes.chipRot, label: classes.label }}
                variant="outlined"
                color="default"
                label="Сложное слово"
              />
            )}
            <Button onClick={onPlay}>
              <VolumeUpRoundedIcon />
            </Button>
          </Box>
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
        { !isTextbook && (
        <RestoreBtn
          onClick={onRestoreWord}
        />
        )}
        {isStudyStatistic && (
          <StudyResults word={word} />
        )}
        {isButtonsActive && isTextbook && (
          <Box className={classes.buttons}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.hardBtn}
              onClick={onHardWord}
              disabled={isHard === 'hard'}
            >
              Сложно
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.deleteBtn}
              onClick={onDeleteWord}
              disabled={isHard === 'hard'}
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
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  setHardWordConnect: setHardWord,
  deleteWordConnect: deleteWord,
  restoreWordConnect: restoreWord,
})(Word);
