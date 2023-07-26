import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
