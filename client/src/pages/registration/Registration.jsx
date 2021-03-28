import React, { useState } from 'react';
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

export default function RegistrationPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loading, request } = useHttp();

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit() {
    const body = {
      name,
      email,
      password,
    };

    try {
      const data = await request('https://rslang-server-slavajsfe.herokuapp.com/users', 'POST', body);
      console.log(data);
    } catch (err) {
      throw new Error(err);
    }
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
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={60}
            />
          </FormControl>
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
