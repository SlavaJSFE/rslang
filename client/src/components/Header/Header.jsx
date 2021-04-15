import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import AuthButtons from '../AuthButtons/AuthButtons';
import rsLangLogo from '../../assets/images/logo/mortarboard.png';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

export default function Header() {
  return (
    <Box className="header">
      <Box className="logo">
        <Link to="/">
          <div className="logo center">
            <img src={rsLangLogo} alt="" />
            <h2 className="logo-title">RS Lang</h2>
          </div>
        </Link>
      </Box>
      <Navigation />
      <AuthButtons />
    </Box>
  );
}
