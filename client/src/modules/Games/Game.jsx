import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';
import Timer from './components/Timer';
import LevelForm from './components/LevelForm';

import { games } from '../../constants/constants';
import Rule from './components/Rule';
import GameStart from './GameStart';

export default function GamesModule() {
  const { type } = useParams();

  const [data, setData] = useState([]);
  const [start, setStart] = useState(false);
  // const [startTimer, setStartTimer] = useState(false);
  // const [showRule, setShowRule] = useState(false);
  // const [showform, setShowForm] = useState(false);

  const activeWords = useSelector((state) => state.game.words);

  const gameObj = games.find((el) => el.type === type);
  const { rule } = gameObj;

  useEffect(() => {
    if (activeWords.length === 0) {
      console.log('show form');
    } else if (activeWords.length < 10) {
      console.log('less than 10');
    }

    setData(activeWords);
  }, [activeWords]);

  useEffect(() => {
    console.log(start);
  }, [start]);

  return (
    <div className="games-module">
      {!start && <GameStart rule={rule} setStart={setStart} wordsNumber={activeWords.length} />}
      {/* {showform && <LevelForm />}
      {showRule && <Rule rule={rule} setShowRule={setShowRule} setStartTimer={setStartTimer} />}
      {!showRule && startTimer && <Timer setStartTimer={setStartTimer} />}
      {gameStart && type === 'savannah' && <Savannah data={data} />}
      {gameStart && type === 'memory' && <Memory data={data} />}
      {gameStart && type === 'audiocall' && <AudioCall data={data} />}
      {gameStart && type === 'sprint' && <Sprint data={data} />} */}
      {start && type === 'savannah' && <Savannah data={data} />}
      {start && type === 'memory' && <Memory data={data} />}
      {start && type === 'audiocall' && <AudioCall data={data} />}
      {start && type === 'sprint' && <Sprint data={data} />}
    </div>
  );
}
