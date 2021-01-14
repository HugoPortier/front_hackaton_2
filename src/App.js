import React from 'react'
import { Switch, Route, BrowserRouter  } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CardContainer from './components/Totalcard/CardContainer';
import Footer from'./components/Footer/Footer';
import Panier from './components/Panier/Panier';

import Login from './components/Authentication/login';

import './App.css';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/login" component={Login} />
        <Switch>
        <Route exact path='/'>
        <Navbar />
        <Banner />
        <CardContainer />
        <Footer />
        </Route>
        <Route exact path='/panier'>
        <Panier/>
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
