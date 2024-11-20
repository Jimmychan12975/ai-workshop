import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Agenda />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
