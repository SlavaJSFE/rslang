import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';

export default function GamesModule() {
  const { type } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://react-learnwords-example.herokuapp.com/words?group=1&page=1');
      const json = await response.json();
      setData([...json]);
      setLoading(!loading);
    }

    if (data.length === 0) fetchData();
  }, []);

  return (
    <div className="games-module">
      {type === 'savannah' && <Savannah data={data} />}
      {type === 'memory' && <Memory data={data} />}
      {type === 'audiocall' && <AudioCall data={data} />}
      {type === 'sprint' && <Sprint data={data} />}
    </div>
  );
}
