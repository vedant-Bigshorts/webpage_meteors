// src/components/sections/TeamSection.js
import React from 'react';
import { players, staff } from '../../data/Team';
import'../../styles/sections/TeamSection.css'
import PlayerCard from '../ui/PlayerCard';

const TeamSection = () => {
  return (
    <section id="team" className="team d-flex flex-column justify-contents-center align-items-center" style={{height:"fit-content"}}>
      <div className="d-flex flex-column align-items-center pad2">
        <h1 className="title2">SQUAD</h1>
        <div className="d-flex">
          <div className="card-group gridlay">
            {players.map((player) => (
              <PlayerCard key={player.id} {...player} />
            ))}
          </div>
        </div>
        <h1 className="title2">STAFF</h1>
        <div className="d-flex">
          <div className="card-group gridlay">
            {staff.map((member) => (
              <PlayerCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;