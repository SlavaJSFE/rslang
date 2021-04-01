import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import './Team.scss';
import dragon from '../../assets/images/team/dragon-head.jpg';
import pantera from '../../assets/images/team/panther-hunting.jpg';
import coder from '../../assets/images/team/working-project.jpg';
import cat from '../../assets/images/team/cat-and-fish.jpg';
import monkey from '../../assets/images/team/monkey.png';

export default function TeamPage() {
  return (
    <div className="team-page page">
      <Container>
        <Header />
        <h2>Team Page</h2>
      </Container>
      <Container className="inner-team">
        <Container className="inner-team">
          <h4>
            Каждый, обучающий английскому языку, говорит, что его методика самая лучшая.
            Но это неправда. Самое лучшее приложение наше. Сосредоточенность на любимом деле
            позволяет нам создавать удобные и дружелюбные интерфейсы. Также работаем над
            производительностью наших приложений.
          </h4>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={dragon} alt="Dragon" />
            </Grid>
            <Grid item xs={9}>
              Вячеслав Шпилеуски - лидер команды. Профессионал. Обожает мобильные гаджеты и
              считается гиком. Не любит есть сосиски по утрам. Разводит гигантских пекинесов.
              Характер нордический, не женат. Отличный художественный вкус.
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              Анастасия Сташевская - отличается способностью понимать сложные концепции.
              Обладает феноменальным чутьем и интуицией. Живет в Москве на Рублевке.
              Периодически ездит в Минск, чтобы навестить любимую бабушку.
            </Grid>
            <Grid item xs={3}>
              <img src={pantera} alt="Pantera" />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={coder} alt="Coder" />
            </Grid>
            <Grid item xs={9}>
              Евгений Бандюкевич - просто делает свою работу.
              Находит выход из любой ситуации. В свободное время воспитывает сына
              двоюродной тетушки.
              Иногда его можно застать потягивающим трубку с табаком &ldquo;Captain Black&rdquo;
              вишневого вкуса.
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              Мария Францева - выделяется широким кругозором в айти-сфере.
              Весьма сообразительная особа. По дороге с работы домой кормит голубей.
              Выращивает кота. Собирает календарики.
            </Grid>
            <Grid item xs={3}>
              <img src={cat} alt="Cat" />
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img src={monkey} alt="Monkey" />
            </Grid>
            <Grid item xs={9}>
              Максим Сава - единственный линуксоид в команде. Старается заниматься
              бэкендом и связывает фронт с ним.
              В молодости был панком. Пишет шуточные стихи.
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}
