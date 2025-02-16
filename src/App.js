// src/App.js
import React from 'react';
import Navbar from './components/layout/Navbar';
import HomeSection from './components/sections/HomeSection';
import BannerSection from './components/sections/BannerSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import FixturesSection from './components/sections/FixturesSection';
import PressSection from './components/sections/PressSection';
import SponsorsSection from './components/sections/SponsorsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <BannerSection />
      <AboutSection />
      <TeamSection />
      <FixturesSection />
      <PressSection />
      <SponsorsSection />
      <ContactSection />
    </div>
  );
}

export default App;