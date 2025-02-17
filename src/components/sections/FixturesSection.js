// src/components/sections/FixturesSection.js
import React from 'react';
import MatchCard from '../ui/MatchCard';
import { matches } from '../../data/fixtures';
import '../../styles/sections/FixturesSection.css';

const FixturesSection = () => {
  return (
    <section id="fixtures" className="center1" style={{backgroundColor:"white"}}>
      <div className="schedule-header">
        <h1 className="titlev">SCHEDULE</h1>
        <h3>2024</h3>
      </div>
      <div className="fixtures-container">
        <div className="card-group gridlay">
          {matches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixturesSection;