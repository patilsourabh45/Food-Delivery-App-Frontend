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
import Dishes1 from './Dishes1'




function App() {

  return (<>
    <BrowserRouter>
      <div className="App">
        <Navigation></Navigation>
      </div>
      <div style={{ height: "150px" }}></div>
      <Switch>
        <Route path='/' component={HomePage} exact></Route>
        <Route path='/aboutus' component={Aboutus} ></Route>
        <Route path='/login' component={LoginPage} ></Route>
        <Route path='/signup' component={SignupPage} ></Route>
        <Route path='/myorders' component={Myorders} ></Route>
        <Route path='/menu/:id' component={Dishes1} ></Route>
        <Route path='*' component={Pagenotfound}></Route>

      </Switch>
    </BrowserRouter>
  </>
  );
}

export default App;