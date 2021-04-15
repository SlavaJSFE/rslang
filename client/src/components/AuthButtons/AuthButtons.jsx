import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Button, Tooltip } from '@material-ui/core';
import './AuthButtons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reduxLogout } from '../../redux/user/actions';
import useAuth from '../../hooks/auth';
import avatarLogo from '../../assets/images/avatar.svg';
import { HELLO, IMAGE } from '../../constants/constants';

export default function AuthButtons() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const { userId, name, avatar } = useSelector((state) => state.user.user);
  const ava = avatar === IMAGE ? avatarLogo : `${avatar}`;
  const dispatch = useDispatch();
  const { logout } = useAuth();

  function handleLogout() {
    dispatch(reduxLogout());
    logout();
  }

  function showAuthButtons() {
    if (isAuth) {
      return (
        <div className="profile-links">
          <Tooltip title="Мой профиль">
            <Link className="avatar-name" to={`/user/${userId}`}>
              <Avatar src={ava} alt="Avatar logo" />
              <span className="user-name">{`${HELLO}, ${name}`}</span>
            </Link>
          </Tooltip>
          <Button
            className="auth-button"
            variant="contained"
            color="primary"
            onClick={handleLogout}
          >
            Выйти
          </Button>
        </div>
      );
    }

    return (
      <>
        <Link to="/login">
          <Button className="auth-button" variant="outlined" color="primary">Войти</Button>
        </Link>
        <Link to="/registration">
          <Button variant="contained" color="primary">
            Регистрация
          </Button>
        </Link>
      </>
    );
  }

  const authButtons = showAuthButtons();

  return (
    <div className="auth-buttons">
      {authButtons}
    </div>
  );
}
