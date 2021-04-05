import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/main/Main';
import TextbookPage from './pages/textbook/Textbook';
import GamesPage from './pages/games/Games';
import StatisticsPage from './pages/statistics/Statistics';
import TeamPage from './pages/team/Team';
import LoginPage from './pages/login/Login';
import RegistrationPage from './pages/registration/Registration';
import UserProfile from './pages/user/UserProfile';
import Game from './modules/Games/Game';

export default function useRoutes() {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (isAuth) {
    return (
      <>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/textbook">
            <TextbookPage />
          </Route>
          <Route path="/games" exact>
            <GamesPage />
          </Route>
          <Route path="/games/:type" exact>
            <Game />
          </Route>
          <Route path="/statistics" exact>
            <StatisticsPage />
          </Route>
          <Route path="/team" exact>
            <TeamPage />
          </Route>
          <Route path="/user/:id">
            <UserProfile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </>
    );
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/textbook">
          <TextbookPage />
        </Route>
        <Route path="/games" exact>
          <GamesPage />
        </Route>
        <Route path="/games/:type" exact>
          <Game />
        </Route>
        <Route path="/statistics" exact>
          <StatisticsPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/registration" exact>
          <RegistrationPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}
