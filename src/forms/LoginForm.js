import React from 'react'
import '../css/Signin.css'
import bodyphoto from '../images/signupphoto.jpeg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  };

  render() {
    return (
      <>
        <div><h1 style={{ textAlign: "center" }}>Login</h1></div>
        <div className="Signin card border-dark mb-3 col-md-12 col-sm-4 col-sx-12">
          <form className="col-md-8 col-sm-4 col-sx-12">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email</label>
              <input type="email" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className="form-control"  />

            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password"  placeholder="Password"   value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} className="form-control" id="exampleInputPassword1" required />
            </div>
            <button style={{marginBottom:'15px'}} type="submit" onClick={() => this.props.login(this.state.email, this.state.password)} className="btn btn-primary">Login</button>
            <span>Don't have an account ?<Link style={{textDecoration:'none',fontWeight:700}}to="./signup"> Create here</Link></span>
          
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm