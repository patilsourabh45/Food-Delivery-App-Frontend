import React from 'react'
import logo from './logo192.png'
import './Signin.css';
import bodyphoto from './signupphoto.jpeg'

function SignIn() {
    return (
        <>
            <div><h1 style={{textAlign:"center"}}>Signin</h1></div>
            <div className="Signin card border-dark mb-3 col-md-12 col-sm-4 col-sx-12">
                <form className="col-md-8 col-sm-4 col-sx-12">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Signin</button>
                </form>
            </div>



        </>
    );
}

export default SignIn;