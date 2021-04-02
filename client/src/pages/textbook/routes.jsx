import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TextbookModule from '../../modules/Textbook/Textbook-module';
import SettingsModule from '../../modules/Settings/Settings-module';
import VocabularyModule from '../../modules/Vocabulary/Vocabulary-module';

export default function useRoutes(path) {
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/list/1/1`} />
        </Route>
        <Route path={`${path}/list/:group/:urlPage`}>
          <TextbookModule />
        </Route>
        <Route exact path={`${path}/vocabulary`}>
          <Redirect to={`${path}/vocabulary/studied/1`} />
        </Route>
        <Route path={`${path}/vocabulary/:unit/:page`}>
          <VocabularyModule />
        </Route>
        <Route exact path={`${path}/settings`}>
          <SettingsModule />
        </Route>
        <Redirect to={path} />
      </Switch>
    </>
  );
}
