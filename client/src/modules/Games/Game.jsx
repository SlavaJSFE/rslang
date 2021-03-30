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

  const [data, setData] = useState([]);
  const [start, setStart] = useState(false);

  const activeWords = useSelector((state) => state.game.words);
  // const level = useSelector((state) => state.game.level);
  const pageNumber = useSelector((state) => state.game.level);

  const gameObj = games.find((el) => el.type === type);
  const { rule } = gameObj;

  useEffect(() => {
    setData(activeWords);
  }, [activeWords]);

  useEffect(() => {
    console.log(start);
  }, [start]);

  return (
    <div className="games-module">
      {!start && <GameStart rule={rule} setStart={setStart} wordsNumber={activeWords.length} />}
      {start && type === 'savannah' && <Savannah data={data} />}
      {start && type === 'memory' && <Memory data={data} />}
      {start && type === 'audiocall' && <AudioCall data={data} />}
      {start && type === 'sprint' && <Sprint data={data} />}
    </div>
  );
}
