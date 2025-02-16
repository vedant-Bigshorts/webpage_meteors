// src/components/sections/HomeSection.js
import React from 'react';
import '../../styles/sections/HomeSection.css';
import teamImage from '../../assets/images/about9.jpg';

const HomeSection = () => {
  return (
    <section className="home-section" id="home">
      <div className="image-container">
        <img
          src={teamImage}
          className="team-image"
          alt="Mumbai Meteors Team"
        />
      </div>
    </section>
  );
};

export default HomeSection;