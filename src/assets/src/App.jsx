// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import PriceList from './components/PriceList';
import Gallery from './components/Gallery';

const App = () => {
  return (
  <div>
    <Header />
    <About />
    <Services />
    <Process />
    <PriceList />
    <Gallery />
    <Footer />
  </div>
  );
};

export default App;
