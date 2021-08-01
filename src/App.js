import '../css/App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import React from 'react'
import Aboutus from './Aboutus';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Myorders from './Myorders'
import Pagenotfound from './Pagenotfound';
import Menu from './Menu';

function App() {
  return (<>
    <BrowserRouter>
       <div className="App">
      <Navigation></Navigation>
      </div>
      <div style={{height:"150px"}}></div>
      <Switch>
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/aboutus' component={Aboutus} ></Route>
      <Route path='/login' component={LoginPage} ></Route>
      <Route path='/signup' component={SignupPage} ></Route>
      
      
      </Switch>
    </BrowserRouter> 
    
    </>
  );
}

export default App;