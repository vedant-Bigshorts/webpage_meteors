// src/components/sections/SponsorsSection.js
import React from 'react';
import '../../styles/sections/SponsorsSection.css';
import credLogo from '../../assets/images/cred-title.jpg';
import cultLogo from '../../assets/images/cultfitf.png';
import scapiaLogo from '../../assets/images/scapiaf.png';

const SponsorCard = ({ image, alt }) => {
  return (
    <div className="card2">
      <img src={image} className="card-img-top" alt={alt} />
    </div>
  );
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="sponsors">
      <div className="d-flex flex-column align-items-center">
        <h1 className="title5">SPONSORS</h1>
        
        <div className="title-sponsor">
          <h2 className="title4">TITLE SPONSOR</h2>
          <SponsorCard 
            image={credLogo} 
            alt="CRED - Title Sponsor" 
          />
        </div>

        <div className="associate-sponsor-section">
          <h2 className="title4">ASSOCIATE SPONSORS</h2>
          <div className="associate-sponsors">
            <SponsorCard 
              image={cultLogo} 
              alt="Cult.fit - Associate Sponsor" 
            />
            <SponsorCard 
              image={scapiaLogo} 
              alt="Scapia - Associate Sponsor" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;