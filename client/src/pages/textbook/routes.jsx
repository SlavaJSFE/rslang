import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TextbookModule from '../../modules/Textbook/Textbook-module';
import SettingsModule from '../../modules/Settings/Settings-module';
import VocabularyModule from '../../modules/Vocabulary/Vocabulary-module';

export default function useRoutes(path) {
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <TextbookModule />
        </Route>
        <Route exact path={`${path}/vocabulary`}>
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
