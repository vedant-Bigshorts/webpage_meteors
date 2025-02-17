import React from 'react';
import '../../styles/sections/PressSection.css';
const PressCard = ({ image, text, link }) => {
  return (
    <div className="card anim rounded" style={{width:"18rem"}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text" style={{ color: "black"}}>{text}</h5>
        <a href={link} className="btn btn-primary">Visit</a>
      </div>
    </div>
  );
};

const PressSection = () => {
  const pressItems = [
    {
      image: "news11.png",
      text: "PhonePe Founders Acquire Mumbai Meteors to Join Prime Volleyball League Bandwagon.",
      link: "https://www.financialexpress.com/business/brandwagon-phonepe-co-founders-pick-up-mumbai-franchise-in-prime-volleyball-league-2023-2706196/"
    },
    {
      image: "PhonePe.jpg",
      text: "PhonePe founders form eighth Prime Volleyball League franchise",
      link: "https://www.sportbusiness.com/news/phonepe-founders-form-eighth-prime-volleyball-league-franchise/"
    },
    {
      image: "news33.png",
      text: "PhonePe founders join Prime Volleyball League, acquire Mumbai team",
      link: "https://www.moneycontrol.com/news/business/announcements/phonepe-founders-join-prime-volleyball-league-acquire-mumbai-team-9301441.html"
    }
  ];

  return (
    <section id="press" className="press" style={{backgroundColor:"darkslateblue"}}>
      <div className="d-flex flex-column align-items-center pad2">
        <h1 className="title2" style={{color:"bisque"}}>PRESS</h1>
        <div className="d-flex">
          <div className="card-group gridlay">
            {pressItems.map((item, index) => (
              <PressCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;