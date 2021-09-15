import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/swiggy.png'
function Navigation(props) {
  return <>
    <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
      <div className="container-fluid" >
        <div className="d-flex align-items-center"><Link className="navbar-brand py-1" to="/"><img src={logo} height="60px" width="70px" alt="LOGO"></img></Link>
        </div>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item" ><Link className="nav-link" to="/aboutus">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Sign up</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/myorders">My orders</Link></li>
            

          </ul>
        </div>
      </div>
    </nav>
  </>
}
export default Navigation;