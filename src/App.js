import '../css/App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import React from 'react'
import Aboutus from './Aboutus';
import Pagenotfound from './Pagenotfound';
import Listing from './Listing';


import Menu from './Menu';

function App() {
  return (<>
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
      </div>
      <div style={{ height: "150px" }}></div>
      <Listing></Listing></>
    <Switch>
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/aboutus' component={Aboutus} ></Route>
      <Route path='/login' component={LoginPage} ></Route>
      <Route path='/signup' component={SignupPage} ></Route>
      <Route path='*' component={Pagenotfound}></Route>
    </Switch>
  </BrowserRouter> 
    
    </>
  );
}

export default App;