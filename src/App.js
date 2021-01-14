import React from 'react'

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardContainer from './components/CardContainer';
import Footer from'./components/Footer/Footer';
import Filter1 from './components/Filter/Filter1';
import Filter2 from './components/Filter/Filter2';
import Filter3 from './components/Filter/Filter3';



import './App.css';

function App() {


  return (
    <div className="App">

        <Navbar />
        <Banner />
        <Filter1 />
        <Filter2 />
        <Filter3 />
        <CardContainer />
        <Footer />
    </div>
  );
}

export default App;
