import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Savannah from './Savannah/Savannah';
import AudioCall from './AudioCall/AudioCall';
import Sprint from './Sprint/Sprint';
import Memory from './MemoryGame';

import GameCards from '../../components/GameCards/GameCards';

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
      <GameCards />
      <Switch>
        <Route path="'/games/savannah'" exact>
          <Savannah data={data} />
        </Route>
        <Route path="/games/audiocall" exact>
          <AudioCall data={data} />
        </Route>
        <Route path="/games/sprint" exact>
          <Sprint data={data} />
        </Route>
        <Route path="/games/memory" exact>
          <Memory data={data} />
        </Route>
      </Switch>

    </div>
  );
}
