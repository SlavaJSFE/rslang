import { Container } from '@material-ui/core';
import React from 'react';
import './Footer.scss';
import gitHubLogo from '../../assets/images/icons/GitHub-Mark-32px.png';
import rssLogo from '../../assets/images/rs-school-js.svg';

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer-info">
          <div className="authors">
            <p className="year">2021 &copy;</p>
            <div className="author">
              <img src={gitHubLogo} alt="GitHub logo" />
              <a href="https://github.com/AStashevskaya" target="blank">AStashevskaya</a>
            </div>
            <div className="author">
              <img src={gitHubLogo} alt="GitHub logo" />
              <a href="https://github.com/mariyafrantsava" target="blank">mariyafrantsava</a>
            </div>
            <div className="author">
              <img src={gitHubLogo} alt="GitHub logo" />
              <a href="https://github.com/SimaxSaab" target="blank">SimaxSaab</a>
            </div>
            <div className="author">
              <img src={gitHubLogo} alt="GitHub logo" />
              <a href="https://github.com/zhenya-band" target="blank">zhenya-band</a>
            </div>
            <div className="author">
              <img src={gitHubLogo} alt="GitHub logo" />
              <a href="https://github.com/SlavaJSFE" target="blank">SlavaJSFE</a>
            </div>
          </div>
          <a href="https://rs.school/js/">
            <img src={rssLogo} alt="rsschool-logo" className="rss-logo" />
          </a>
        </div>
      </Container>
    </div>
  );
}
