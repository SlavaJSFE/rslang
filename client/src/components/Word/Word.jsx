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
import { connect, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useStyles from './WordStyles';
import { server, UNIT } from '../../constants/constants';
import './Word.scss';
import getUnitStyles from './utilits/getUnitStyles';
import * as textBookActions from '../../redux/textBook/actions';
import * as vocabularyActions from '../../redux/vocabulary/actions';
import StudyResults from '../../modules/Vocabulary/CommonStudyResults/StudyResults';
import { fetchVocabularyWords } from '../../redux/vocabulary/DifficultWords/actions';
import { getDelWords } from '../../api/apiVocabulary';
import { fetchVocabularyStudyWords } from '../../redux/vocabulary/StudyWords/actions';
import { fetchVocabularyAmountStudyWords } from '../../redux/vocabulary/AmountStudyWords/actions';
import { fetchDelWords } from '../../redux/vocabulary/DeletedWords/actions';
import { getCountDelWord } from '../../redux/vocabulary/actions';

const Word = ({
  word,
  isTranslation,
  isButtonsActive,
  setHardWord,
  restoreWord,
  deleteWord,
  userData,
  group,
  isHard,
  isTextbook,
  isStudyStatistic,
  setIsAuthError,
}) => {
  const classes = useStyles();
  const currentUnit = word.group + 1;
  const unitClasses = getUnitStyles(currentUnit);

  const playAudio = (audioSrc) => {
    const audio = new Audio(audioSrc);
    return new Promise((resolve) => {
      audio.play();
      audio.onended = resolve;
    });
  };

  const onPlay = async () => {
    await playAudio(`${server}/${word.audio}`);
    await playAudio(`${server}/${word.audioExample}`);
    await playAudio(`${server}/${word.audioMeaning}`);
  };

  const onHardWord = async () => {
    if (!userData.token) {
      setIsAuthError(true);
    }
    await setHardWord(word, userData);
  };

  const dispatch = useDispatch();

  const onDeleteWord = async () => {
    if (!userData.token) {
      setIsAuthError(true);
    }
    await deleteWord(word.id, userData);
    await setHardWord(word.id, userData);
  };

  const { typeWords, unit, numPage } = useParams('/vocabulary/:typeWords/:unit/:numPage');

  const onRestoreWord = async () => {
    await restoreWord(word._id, userData);
    dispatch(fetchDelWords(typeWords, unit - 1, numPage - 1, userData));
    dispatch(getCountDelWord(userData));
  };

  return (
    <Card className={unitClasses.root}>
      <div className={unitClasses.unitMark}>{`${UNIT} ${currentUnit}`}</div>
      <CardMedia
        className={classes.media}
        component="img"
        alt={word.word}
        image={`${server}/${word.image}`}
      />
      <CardContent className={classes.content}>
        {/* {!isTextbook && (
          <span className={classes.unitWords}>
            unit
            {word.group}
          </span>
        )} */}
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
            {isHard && (
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
        {!isTextbook && (
          <Box className={classes.buttons}>
            <Button
              variant="outlined"
              color="primary"
              type="button"
              className={classes.deleteBtn}
              onClick={onRestoreWord}
            >
              Восстановить
            </Button>
          </Box>
        )}
        {isStudyStatistic && <StudyResults word={word} />}
        {isButtonsActive && isTextbook && (
          <Box className={classes.buttons}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.hardBtn}
              onClick={onHardWord}
              disabled={isHard}
            >
              Сложно
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.deleteBtn}
              onClick={onDeleteWord}
              disabled={isHard}
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
  group: state.group,
});

const mapDispatchToProps = {
  setHardWord: textBookActions.setHardWord,
  deleteWord: textBookActions.deleteWord,
  restoreWord: vocabularyActions.restoreWord,
  setIsAuthError: textBookActions.setIsAuthError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Word);
