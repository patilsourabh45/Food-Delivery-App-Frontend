
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import React from 'react'
import Aboutus from './Aboutus';
import HomePage from '../pages/HomePage';
import Pagenotfound from './Pagenotfound';
import Myorders from './Myorders'
import SignUp from './Signup';
import LoginPage from '../pages/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
        </div>
        <div style={{ height: "150px" }}></div>
      <Switch>
        <Route path='/' component={HomePage} exact></Route>
        <Route path='/aboutus' component={Aboutus} ></Route>
        <Route path='/login' component={LoginPage} ></Route>
        <Route path='/signup' component={SignUp} ></Route>
        <Route path='/myorders' component={Myorders} ></Route>
        <Route path='*' component={Pagenotfound}></Route>
      </Switch>
    </BrowserRouter> 
    </>
  );
}

export default App;