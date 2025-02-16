import React from 'react';
import '../../styles/ui/SocialMediaLinks.css';
const SocialMediaLinks = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/mumbaimeteors/", icon: "instagram.png", height: "3vw", paddingRight: "0.8vw" },
    { href: "https://www.facebook.com/mumbaimeteors/", icon: "metaf.png", height: "3vw" },
    { href: "https://twitter.com/mumbai_meteors?lang=en", icon: "xlogof.png", height: "3vw" },
    { href: "https://www.youtube.com/@PrimeVolleyballLeague", icon: "youtube11f.png", height: "5vw" }
  ];

  return (
    <div className="hor11">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href}>
          <img 
            alt="" 
            src={link.icon} 
            style={{ height: link.height, paddingRight: link.paddingRight }}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;