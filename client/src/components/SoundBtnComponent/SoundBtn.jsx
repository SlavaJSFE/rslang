import React from 'react';

import useSound from 'use-sound';

import { Button } from '@material-ui/core';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default function SoundBtn({ audioSrc }) {
  const url = `https://slavajsfe.github.io/rslang-assets/${audioSrc}`;
  const [play] = useSound(url);

  const handleSoundBtnClick = () => {
    console.log('playing', url);
    play();
  };

  return (
    <Button onClick={handleSoundBtnClick}>
      <VolumeUp />
    </Button>
  );
}
