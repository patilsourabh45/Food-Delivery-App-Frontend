import React from 'react';
import SignupForm from '../forms/SignupForm';
import Loader from './Loader';
import { signupApi } from '../api/signupApi';
import { Link } from 'react-router-dom'
import '../css/Signin.css'



const AvailableStates = {
  NEW: 'NEW',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: AvailableStates.NEW
    }
  }

  createSignup(name, email, phonenumber, password) {
    console.log(`Email = ${email} and password=${password}`);
    this.setState({ state: AvailableStates.LOADING });
    signupApi(name,  email, phonenumber, password)
      .then(response => {
        console.log(JSON.stringify(response));
        if (response.status === 200) {
          this.setState({ state: AvailableStates.SUCCESS });
         

        }
        else {
          this.setState({ state: AvailableStates.ERROR });
        }
      })
      .catch(error => {
        this.setState({ state: AvailableStates.ERROR });
      })
  }

  render() {
    const { state } = this.state;
    return (
      <>
        {
          state === AvailableStates.NEW &&
          (
            <SignupForm signup={(name, email, phonenumber, password) => this.createSignup(name, email, phonenumber, password)} />
          )
        }
        {
          state === AvailableStates.LOADING && (<Loader />)
        }
        {
          state === AvailableStates.ERROR && (
            <>
              <div className="center">
                <div> Error occurred </div>
                <br></br>
                <button type="button" class="btn btn-primary"><Link style={{ textDecoration: 'none', color: "white" }} to="./signup">Signup</Link> </button>
              </div>
            </>
          )
        }
        {
          state === AvailableStates.SUCCESS && (
            <>
              <div className="center">
                <div> Signup successfull! </div>
                <br></br>
                <button type="button" class="btn btn-primary"><Link style={{ textDecoration: 'none', color: "black" }} to="./login">Login</Link> </button>
              </div>
            </>
          )
        }
      </>
    )
  }
}

export default SignupComponent;