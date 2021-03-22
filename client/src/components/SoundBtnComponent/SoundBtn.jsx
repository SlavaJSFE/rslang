import React from 'react';

import useSound from 'use-sound';

import { Button } from '@material-ui/core';
import VolumeUp from '@material-ui/icons/VolumeUp';

export default function SoundBtn({ audioSrc }) {
  const src = `https://github.com/rolling-scopes-school/react-rslang-be/tree/main/${audioSrc}`;
  const [play] = useSound(src);

  const handleSoundBtnClick = () => {
    console.log('playing', src);
    play();
  };

  return (
    <Button onClick={handleSoundBtnClick}>
      <VolumeUp />
    </Button>
  );
}
