import React, { useEffect, useState } from 'react';

import Savanna from './Savanna/Savanna';
import AudioGame from './AudioGame/AudioGame';
import Sprint from './Sprint/Sprint';

export default function GamesModule() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://react-learnwords-example.herokuapp.com/words?group=1&page=1');
      const json = await response.json();
      setData([...json]);
    }

    if (data.length === 0) fetchData();
  }, []);

  return (
    <div className="games-module">
      <h2>Games Module</h2>
      <Sprint data={data} />
      {/* <AudioGame data={data} /> */}
      {/* <Savanna data={data} /> */}
    </div>
  );
}
