import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';
import Timer from './components/Timer';

import { games } from '../../constants/constants';
import Rule from './components/Rule';

export default function GamesModule() {
  const { type } = useParams();

  const [data, setData] = useState([]);
  const [startTimer, setStartTimer] = useState(false);
  const [showRule, setShowRule] = useState(true);

  const gameObj = games.find((el) => el.type === type);
  const { rule } = gameObj;

  const gameStart = !startTimer && !showRule;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://react-learnwords-example.herokuapp.com/words?group=1&page=1');
      const json = await response.json();
      setData([...json]);
    }

    if (data.length === 0) fetchData();
  }, []);

  useEffect(() => {
  console.log('nastyaaa')
  }, [startTimer]);

  return (
    <div className="games-module">
      {showRule && <Rule rule={rule} setShowRule={setShowRule} setStartTimer={setStartTimer} />}
      {!showRule && startTimer && <Timer setStartTimer={setStartTimer} />}
      {gameStart && type === 'savannah' && <Savannah data={data} />}
      {gameStart && type === 'memory' && <Memory data={data} />}
      {gameStart && type === 'audiocall' && <AudioCall data={data} />}
      {gameStart && type === 'sprint' && <Sprint data={data} />}
    </div>
  );
}
