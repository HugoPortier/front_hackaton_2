import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardContainer from './components/CardContainer';
import Footer from'./components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      <Route exact path="/">
      <Navbar />
      <Banner />
      <CardContainer />
      <Footer />
      </Route>
      
    </div>
  );
}

export default App;
