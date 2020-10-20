import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="app">
      <Header />
      
      <Hero />

      {/* Main */}
      <h1>Body</h1>
      
      <Footer />
      
    </div>
  );
}

export default App;
