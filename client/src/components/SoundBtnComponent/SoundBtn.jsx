import React from 'react';

import useSound from 'use-sound';

import { Button } from '@material-ui/core';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default function SoundBtn({ audioSrc }) {
  // const url = `https://slavajsfe.github.io/rslang-assets/${audioSrc}`;
  const [play] = useSound(audioSrc);

  const handleSoundBtnClick = () => {
    console.log('playing', audioSrc);
    play();
  };

  return (
    <Button onClick={handleSoundBtnClick}>
      <VolumeUp />
    </Button>
  );
}
