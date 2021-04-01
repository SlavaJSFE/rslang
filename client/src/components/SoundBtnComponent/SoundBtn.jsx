import React from 'react';

import useSound from 'use-sound';

import { Button } from '@material-ui/core';
import VolumeUp from '@material-ui/icons/VolumeUp';

import { server } from '../../constants/constants';

export default function SoundBtn({ audioSrc }) {
  const url = `${server}${audioSrc}`;
  const [play] = useSound(url);

  const handleSoundBtnClick = () => {
    console.log(url);
    play();
  };

  return (
    <Button onClick={handleSoundBtnClick}>
      <VolumeUp />
    </Button>
  );
}
