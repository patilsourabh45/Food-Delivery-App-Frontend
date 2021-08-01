
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import React from 'react'
import Aboutus from './Aboutus';
import Pagenotfound from './Pagenotfound';
import Listing from './Listing';
import Myorders from './Myorders'
import Card from './Card'
import SignUp from './Signup';
import SignIn from './Signin';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
        </div>
        <div style={{ height: "150px" }}></div>
        <Listing></Listing>
      <Switch>
        <Route path='/' component={Card} exact></Route>
        <Route path='/aboutus' component={Aboutus} ></Route>
        <Route path='/login' component={SignIn} ></Route>
        <Route path='/signup' component={SignUp} ></Route>
        <Route path='*' component={Pagenotfound}></Route>
      </Switch>
    </BrowserRouter> 
    </>
  );
}

export default App;