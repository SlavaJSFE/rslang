import React from 'react';
// import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@material-ui/core';
import './Main.scss';
import Footer from '../../components/Footer/Footer';
import mainImage from '../../assets/images/students-textbooksss.png';
import Header from '../../components/Header';

export default function MainPage() {
  return (
    <div className="main-page page">
      <Container>
        <Header />
        <Box className="intro">
          <Box>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit maxime obcaecati consequuntur, illum ab aut! Vero quam natus aliquam assumenda,
              ad, vitae corporis sunt iure sint voluptas esse quidem quo obcaecati voluptates adipis
              possimus asperiores! Eveniet nulla rerum numquam quod doloribus adipisci provident,
              aut excepturi, voluptatibus sit unde eum culpa.
            </p>
            <Button variant="contained" color="primary">
              Button
            </Button>
          </Box>
          <Box>
            <img className="image" src={mainImage} alt="" />
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
