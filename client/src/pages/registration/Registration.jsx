/* eslint-disable no-empty */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import './Registration.scss';
import useHttp from '../../hooks/http.hook';
import useAuth from '../../hooks/auth.hook';
import { setMessage } from '../../redux/user/actions';
import { server } from '../../constants/constants';

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ava, setAvatar] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loading, request } = useHttp();
  const { login } = useAuth();
  const dispatch = useDispatch();
  const successMessage = 'Новый пользователь был успешно создан';
  let avatar = '';

  async function handleSubmit() {
    const toBase64 = (file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
    avatar = await toBase64(ava);
    const body = {
      name, email, password, avatar,
    };

    try {
      const response = await request(`${server}users`, 'POST', body);

      if (response && response.id) {
        dispatch(setMessage(successMessage));

        const data = await request(`${server}signin`, 'POST', { email, password });

        const user = {
          token: data.token,
          refreshToken: data.refreshToken,
          userId: data.userId,
          name: data.name,
          avatar: data.avatar,
        };
        login(user);
      }
    } catch (err) {}
  }

  return (
    <div className="login-page page">
      <Container>
        <Header />
        <form className="auth-form">
          <h2>Создать новый аккаунт</h2>
          <TextField
            id="name-input"
            label="Ваше имя"
            value={name}
            type="text"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="email-input"
            label="Электронная почта"
            value={email}
            type="email"
            autoComplete="current-email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="password-input">Пароль</InputLabel>
            <OutlinedInput
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={60}
            />
          </FormControl>
          <p>Загрузить аватар на сервер</p>
          <input accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} type="file" placeholder="Загрузить аватар" />
          <div className="form-button">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
}
