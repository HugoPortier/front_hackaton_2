import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CardContainer from './components/Totalcard/CardContainer';
import Footer from'./components/Footer/Footer';
import Panier from './components/Panier/Panier';

import './App.css';

function App() {


  return (
    <div className="App">
      <Switch>

        <Route exact path='/'>
          <Navbar />
          <Banner />
          <CardContainer />
          <Footer />
        </Route>

        <Route exact path='/panier'>
        <Navbar/>
        <Panier/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
