import React from 'react'
function SignUp() {
    return (
        <>
            <div><h2 style={{ textAlign: "center", marginTop:"-30px"}}>Signup</h2></div>
            <div className="Signup card border-dark mb-3 col-md-12 col-sm-4 col-sx-12">
                <form className="col-md-8 col-sm-4 col-sx-12">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Email</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone number</label>
                        <input type="tel" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>



        </>
    );
}
export default SignUp