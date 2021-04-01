import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';
import GameStart from './GameStart';

import { games } from '../../constants/constants';

export default function GamesModule() {
  const { type } = useParams();
  const [start, setStart] = useState(false);

  const activeWords = useSelector((state) => state.game.words);
  const pageNumber = useSelector((state) => state.game.level);

  const gameObj = games.find((el) => el.type === type);
  const { rule } = gameObj;

  return (
    <div className="games-module">
      {!start && (
        <GameStart
          rule={rule}
          setStart={setStart}
          wordsNumber={activeWords.length}
        />
      )}
      {start && type === 'savannah' && <Savannah data={activeWords} />}
      {start && type === 'memory' && <Memory data={activeWords} />}
      {start && type === 'audiocall' && <AudioCall data={activeWords} />}
      {start && type === 'sprint' && <Sprint data={activeWords} />}
    </div>
  );
}
