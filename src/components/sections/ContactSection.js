import React from 'react';
import '../../styles/sections/ContactSection.css';
const ContactSection = () => {
  const quickLinks = [
    'Home', 'About', 'Team', 
    'Schedule', 'Press', 'Sponsors'
  ];

  const socialMediaLinks = [
    {
      href: "https://www.instagram.com/mumbaimeteors/",
      src: "instagram.png",
      alt: "Instagram",
      style: { height: "4vw", paddingRight: 0.8 }
    },
    {
      href: "https://www.facebook.com/mumbaimeteors/",
      src: "metaf.png",
      alt: "Facebook",
      style: { height: "4vw" }
    },
    {
      href: "https://twitter.com/mumbai_meteors?lang=en",
      src: "xlogof.png",
      alt: "X (Twitter)",
      style: { height: "4vw" }
    },
    {
      href: "https://www.youtube.com/@PrimeVolleyballLeague",
      src: "youtube11f.png",
      alt: "YouTube",
      style: { height: "6vw" }
    }
  ];

  return (
    <section id="contact" className="contact bg5">
      <div className="cont center cont1 mx-5">
        <h1 className="signup title5" style={{ fontWeight: "500" }}>CONTACT</h1>
        
        <div className="justify-content-center v">
          {/* Team Info Card */}
          <div className="card margincont bg7" style={{ width: "18rem", opacity: "1" }}>
            <img 
              src="imgabout.png" 
              className="card-img-top" 
              alt="Mumbai Meteors Team" 
            />
            <div className="card-body">
              <p className="card-text" style={{ color: "white" }}>
                Mumbai Meteors is a leading Men's Volleyball Team from Mumbai playing in The Prime Volleyball League in India.
              </p>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="card margincont bg7 top7" style={{ width: "18rem" }}>
            <div className="card-header" style={{ color: "white" }}>
              <h5>Quick Links</h5>
            </div>
            <ul className="list-group list-group-flush">
              {quickLinks.map((link, index) => (
                <a 
                key={index}
                href={link.toLowerCase() === 'schedule' ? '#fixtures' : `#${link.toLowerCase().replace(' ', '')}`}
                className="text-decoration-none"
              >
                  <li 
                    className="list-group-item bg7" 
                    style={{ color: "white", paddingTop: "1.5rem" }}
                  >
                    {link}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <h1 className="sochead">Social Media</h1>
        <div className="hor">
          {socialMediaLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={social.src} 
                alt={social.alt} 
                style={social.style} 
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <h5 style={{ paddingBottom: "0.5rem" }}>
            ©2023 MUMBAI METEORS ALL RIGHTS RESERVED.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;