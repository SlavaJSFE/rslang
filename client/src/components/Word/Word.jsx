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
import axios from 'axios';

import useStyles from './WordStyles';
import { server } from '../../constants/constants';

const Word = ({ word }) => {
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

  const setHardWord = () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjA2YjhlNTU0N2VhMDAxNWFlODkzYyIsImlhdCI6MTYxNjk0MDcwNSwiZXhwIjoxNjE2OTU1MTA1fQ.BNqGk-xn7QZe52AQJCzDDoOaPatWOLO55zmDCAS7qLQ';
    axios
      .post(
        `https://rslang-server-slavajsfe.herokuapp.com/users/60606b8e5547ea0015ae893c/words/${word.id}`,
        {
          difficulty: 'hard',
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => console.log(res));
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
        <Box>
          <Typography
            color="textPrimary"
            component="p"
            className={classes.wordTranslate}
          >
            {word.wordTranslate}
          </Typography>
        </Box>
        <Box className={classes.textMeaningTranslate}>
          <Typography
            color="textPrimary"
            component="p"
            dangerouslySetInnerHTML={{ __html: word.textMeaning }}
          />
          <Typography
            color="textPrimary"
            component="p"
            variant="body2"
            dangerouslySetInnerHTML={{ __html: word.textMeaningTranslate }}
          />
        </Box>
        <Box>
          <Typography
            component="p"
            color="textPrimary"
            dangerouslySetInnerHTML={{ __html: word.textExample }}
          />
          <Typography
            component="p"
            color="textPrimary"
            variant="body2"
            dangerouslySetInnerHTML={{ __html: word.textExampleTranslate }}
          />
        </Box>
        <Box className={classes.buttons}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.hardBtn}
            onClick={setHardWord}
          >
            Сложно
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.deleteBtn}
          >
            Удалить
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Word;
