import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import team from '../../constants/team';
import MemberCard from './components/MemberCard/MemberCard';
import './Team.scss';

export default function TeamPage() {
  return (
    <div className="team-page page">
      <Container>
        <Header />
        <h2 className="center">Наша команда</h2>
        <div className="team-cards">
          {team.map((member) => <MemberCard props={member} key={member.email} />)}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
