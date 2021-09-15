import React from 'react';
function AboutUs(){
    return <>
    <h1>My orders</h1>
    <div className="col-sm-6 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{backgroundImage : `url(  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i1klgny2esmjqeoz8hsg")`, minHeight: '200px'}}><a className="tile-link" href="detail.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <h4 className="text-white text-shadow"></h4>
                  <p className="mb-2 text-xs">
                  </p>
                </div>
                
              </div>
              <div className="card-body">
                <p className="text-sm text-muted mb-3">Order Id : 867088</p>
                <p className="text-sm text-muted text-uppercase mb-1"> <a href="#" className="text-dark"><h6>Galaxy Biryani</h6></a></p>
                <p className="text-sm mb-0">Chicken Dum Biryani
                </p>
                <p className="text-sm mb-0">Price : 400 RS
                </p>
               
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{backgroundImage : `url("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czyvgxfuosm00dxkzpcf")`, minHeight: '200px'}}><a className="tile-link" href="detail.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <h4 className="text-white text-shadow"></h4>
                  <p className="mb-2 text-xs">
                  </p>
                </div>
                
              </div>
              <div className="card-body">
                <p className="text-sm text-muted mb-3">Order Id : 867089</p>
                <p className="text-sm text-muted text-uppercase mb-1"> <a href="#" className="text-dark"><h6 style={{textDecoration:"lineThrough"}}>Palvi Hotel</h6></a></p>
                <p className="text-sm mb-0">Paneer Masala
                </p>
                <p className="text-sm mb-0">Price : 300 RS
                </p>
               
              </div>
            </div>
          </div>
    
    </>
}
export default AboutUs;