import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SocialLinks from "./components/SocialLinks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
