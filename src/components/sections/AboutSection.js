import React from 'react';
import '../../styles/sections/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay">
        <h1 className="about-title">ABOUT</h1>
        <p className="about-text">
          From the neon lights of Mumbai's skyline to the 
          electrifying atmosphere of the volleyball court, the 
          Mumbai Meteors is a young team, established in 
          2022, plays with the heart of a seasoned contender, 
          weaving agility and speed into their gameplay.So, 
          watch them closely, these rising stars with the 
          dream of a golden championship trophy glittering in 
          their eyes. The Meteors are here to stay, leaving their 
          mark on the Indian volleyball landscape.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </section>
  );
};

export default AboutSection;

