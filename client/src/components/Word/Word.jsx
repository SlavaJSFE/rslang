import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Box,
} from '@material-ui/core';
import VolumeUpRoundedIcon from '@material-ui/icons/VolumeUpRounded';

import './Word.scss';
import { server } from '../../constants/constants';

const Word = ({ word }) => {
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

  return (
    <Card className="word">
      <CardMedia
        className="word__media"
        style={{ width: '150px', height: '150px' }}
        component="img"
        alt={word.word}
        image={`${server}${word.image}`}
      />
      <CardContent className="word-content">
        <Box className="word-content__header">
          <Box className="word-content__header-text">
            <Typography variant="h5" component="h3">
              {word.word}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {word.transcription}
            </Typography>
          </Box>
          <button
            type="button"
            className="word-content__header-btn"
            onClick={onPlay}
          >
            <VolumeUpRoundedIcon />
          </button>
        </Box>
        <Box>
          <Typography color="textPrimery" component="p">
            {word.textMeaning}
          </Typography>
        </Box>
        <Box>
          <Typography color="textPrimery" component="p">
            {word.textExample}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Word;
