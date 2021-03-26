import React, { useEffect, useState } from 'react';

import Savanna from './Savanna/Savanna';
import AudioGame from './AudioGame/AudioGame';
import Sprint from './Sprint/Sprint';
import MemoryGame from './MemoryGame';

export default function GamesModule() {
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
      {
      loading ? <h2>loading</h2> : <MemoryGame data={data} />
    }
      {/* <h2>Games Module</h2>
      <MemoryGame data={data} /> */}
      {/* <Sprint data={data} /> */}
      {/* <AudioGame data={data} /> */}
      {/* <Savanna data={data} /> */}
    </div>
  );
}
