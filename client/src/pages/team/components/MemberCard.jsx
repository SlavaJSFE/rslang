import React from 'react';
import { Link } from 'react-router-dom';
import './MemberCard.scss';
import locationIcon from '../../../assets/images/icons/location.svg';
import gitHubIcon from '../../../assets/images/icons/GitHub-Mark-32px.png';
import linkedInIcon from '../../../assets/images/icons/linkedin.svg';

export default function MemberCard({ props }) {
  const {
    name,
    image,
    role,
    location,
    gitHub,
    linkedIn,
    telegram,
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
          <img src={locationIcon} alt="" />
          <span>{location}</span>
        </div>
        <p className="member-contribution">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tenetur doloribus corporis obcaecati dolorem eius quos deserunt pariatur iusto
          asperiores nobis at consequuntur sunt, repudiandae deleniti quis ea qui dicta!
          Exercitationem.
        </p>
        <div className="member-social-media">
          <Link to={gitHub}>
            <img src={gitHubIcon} alt="" />
          </Link>
          <Link to={linkedIn}>
            <img src={linkedInIcon} alt="" />
          </Link>
          <Link to={telegram}>
            <img src={gitHubIcon} alt="" />
          </Link>
          <Link to={gitHub}>
            <img src={gitHubIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
