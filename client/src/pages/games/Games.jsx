import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Container } from '@material-ui/core';

import useRoutes from './routes';
import Savannah from '../../modules/Games/Savannah/Savannah';
import AudioCall from '../../modules/Games/AudioCall/AudioCall';
import Sprint from '../../modules/Games/Sprint/Sprint';
import Memory from '../../modules/Games/MemoryGame';

import Footer from '../../components/Footer/Footer';
import GamesModule from '../../modules/Games/Games-module';
import Header from '../../components/Header';

export default function GamesPage() {
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
  console.log(data);

  return (
    <div className="games-page page">
      <Container>
        <Header />
        <h1>hello</h1>
        <GamesModule />
        {useRoutes('games',
          data)}
        {/* <Switch>
          <Route path="/games/savannah" exact>
            <Savannah data={data} />
          </Route>
          <Route path="/games/audiocall" exact>
            <AudioCall data={data} />
          </Route>
          <Route path="/games/sprint" exact>
            <Sprint data={data} />
          </Route>
          <Route path="/games/memory" exact>
            <Memory />
          </Route>
          <Redirect to="/games" />
        </Switch> */}
      </Container>
      <Footer />
    </div>
  );
}
