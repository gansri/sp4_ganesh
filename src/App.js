
import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Login from '../src/components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./appStore";


import Navigation from '../src/components/Navigation' ;
import Landingpage from '../src/components/Landingpage' ;



class App extends Component {
  render() {

  
  return (
   
    <Provider store={store}>
      <BrowserRouter>

        <Navigation />
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/Landingpage" component={Landingpage}/>
          </Switch>
      </BrowserRouter>

    </Provider>
  );
}
}
export default App;
