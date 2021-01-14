import React from 'react'

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardContainer from './components/CardContainer';
import Footer from'./components/Footer/Footer';



import './App.css';

function App() {


  return (
    <div className="App">

        <Navbar />
        <Banner />
        <CardContainer />
        <Footer />
    </div>
  );
}

export default App;
