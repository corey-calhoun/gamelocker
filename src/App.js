import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row/Row';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Hero />

      <Row title="Platforms" />
      <Row title="Genres" />
      <Row title="Franchises" />
      <Row title="Platform" />
      <Row title="Platform" />
      <Row title="Platform" />
      <Row title="Platform" />
      
      
      <Footer />
      
    </div>
  );
}

export default App;
