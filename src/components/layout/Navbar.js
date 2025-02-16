import React from 'react';
import NavLinks from '../ui/NavLinks';
import SocialMediaLinks from '../ui/SocialMediaLinks';
import '../../styles/sections/Navbar.css'; 
import imgabout from '../../assets/images/imgabout.png';

const Navbar = () => {
  return (
    <section className="nav1">
      <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
        <img className="siznav" alt="" src={imgabout} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse padnav" id="navbarSupportedContent">
            <NavLinks />
            <SocialMediaLinks />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;