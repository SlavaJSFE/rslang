import React from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';

import Savannah from '../../modules/Games/Savannah/Savannah';
import Audiocall from '../../modules/Games/AudioCall/AudioCall';
import Sprint from '../../modules/Games/Sprint/Sprint';
import Memory from '../../modules/Games/MemoryGame';

export default function useRoutes(path, data) {
    console.log(data, path);
  return (
    <>
      <Switch>
        <Route path={`${path}/savannah`}>
          <Savannah data={data} />
        </Route>
        <Route exact path={`${path}/audiocall`}>
          <Audiocall data={data} />
        </Route>
        <Route exact path={`${path}/sprint`}>
          <Sprint data={data} />
        </Route>
        <Route exact path={`${path}/memory`}>
          <Memory data={data} />
        </Route>
        <Redirect to={path} />
      </Switch>
    </>
  );
}
