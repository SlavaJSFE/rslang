import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Tooltip } from '@material-ui/core';
import './AuthButtons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reduxLogout } from '../../redux/user/actions';
import useAuth from '../../hooks/auth.hook';
import avatarLogo from '../../assets/images/avatar.svg';

export default function AuthButtons() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const { userId, name, avatar } = useSelector((state) => state.user.user);
  const ava = avatar ? `${avatar}` : avatarLogo;
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
              <img src={ava} alt="Avatar logo" width="30" height="30" />
              {/* <Avatar>A</Avatar> */}
              <span className="user-name">{`Hello, ${name}`}</span>
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
