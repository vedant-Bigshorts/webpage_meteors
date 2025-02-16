import React from 'react';
import '../../styles/ui/PlayerCard.css';

const PlayerCard = ({ image, name, country, nationality, position }) => {
  return (
    <div className="card anim rounded-3 text-bg" style={{ width: "18rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: '200px', objectFit: 'cover', objectPosition: 'top' }}
      />
      <div className="card-body" style={{ color: "bisque" }}>
        <h5 className="card-title" style={{ color: "bisque" }}>{name}</h5>
        <h5 className="card-title" style={{ color: "bisque" }}>{nationality}</h5>
        <h5 className="card-title" style={{ color: "bisque" }}>{country}</h5>
        <h5 className="card-title" style={{ color: "bisque" }}>{position}</h5>
      </div>
    </div>
  );
};

export default PlayerCard;