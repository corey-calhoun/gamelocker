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

      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      
      <Footer />
      
    </div>
  );
}

export default App;
