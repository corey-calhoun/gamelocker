import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Row from './components/Row/Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Hero />

      <Row 
       title="Platforms"
       fetchUrl={requests.fetchGamesByPlatform}
       isLargeRow={true}
      />
      <Row title="Most Anticipated" fetchUrl={requests.fetchMostAnticipated}/>
      <Row title="Genres" fetchUrl={requests.fetchGamesByGenres}/>
      <Row title="Franchises" fetchUrl={requests.fetchGamesByFranchise}/>
      
      
      <Footer />
      
    </div>
  );
}

export default App;
