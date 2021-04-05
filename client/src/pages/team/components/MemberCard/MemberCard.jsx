import React from 'react';
import './MemberCard.scss';
import locationIcon from '../../../../assets/images/icons/location.svg';
import gitHubIcon from '../../../../assets/images/icons/GitHub-Mark-32px.png';
import linkedInIcon from '../../../../assets/images/icons/linkedin.svg';
import telegramIcon from '../../../../assets/images/icons/telegram.svg';
import cvIcon from '../../../../assets/images/icons/page.svg';

export default function MemberCard({ props }) {
  const {
    name,
    image,
    role,
    location,
    gitHub,
    linkedIn,
    telegram,
    email,
    CV,
  } = props;

  return (
    <div className="member">
      <div className="member-photo">
        <img src={image} alt="" />
      </div>
      <div className="member-description">
        <h2 className="member-name">{name}</h2>
        <h4 className="member-role">{role}</h4>
        <div className="member-location">
          <img src={locationIcon} alt="Location" />
          <span>{location}</span>
        </div>
        <p className="member-contribution">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur doloribus corporis obcaecati dolorem eius quos deserunt pariatur iusto
          asperiores nobis at consequuntur sunt, repudiandae deleniti quis ea qui dicta!
          Exercitationem.
        </p>
        <div className="member-email">
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="member-social-media">
          <a href={gitHub} target="blank">
            <img src={gitHubIcon} alt="GitHub" />
          </a>
          {
            linkedIn ? (
              <a href={linkedIn} target="blank">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
            ) : null
          }
          <a href={telegram} target="blank">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          {
            CV ? (
              <a href={CV} target="blank">
                <img src={cvIcon} alt="CV" />
              </a>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}
