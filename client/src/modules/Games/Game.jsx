import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';
import GameStart from './GameStart';

import { games } from '../../constants/constants';
import { fetchGrupWords } from '../../redux/miniGameWords/actions';

export default function GamesModule() {
  const { type } = useParams();
  const [start, setStart] = useState(false);

  const activeWords = useSelector((state) => state.game.words);
  const pageNumber = useSelector((state) => state.game.level);
  const dispatch = useDispatch();

  const gameObj = games.find((el) => el.type === type);
  const { rule } = gameObj;

  useEffect(() => {
    if (activeWords.length === 0) dispatch(fetchGrupWords());
  }, [activeWords]);

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
