import React from 'react'
import { Link } from 'react-router-dom'

function RestaurantCard(props){
    const getRating = ()=>{
      // <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                    </i>
      let res = [];
      let c =0
      for(let i=0;i<Math.round(props.restaurant.restaurantRating);i++){
        res.push(<i className="fa fa-star text-warning" key={i}></i>)
        c++;
      }
      for(let i=c;i<5;i++){
        res.push(<i key={i} className="fa fa-star text-gray-300">                    </i>)
      }
      return res;
    }
    return <>
    <div className="col-sm-3 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
            <div className="card h-100 border-0 shadow"  style={{borderRadius:"20px"}}>
              <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{backgroundImage : `url(${props.restaurant.restaurantImage})`, minHeight: '200px'}}><Link className="tile-link" to='/menu/:id'></Link>
                <div className="card-img-overlay-bottom z-index-20">
                  
                  <p className="mb-2 text-xs">{getRating()}
                  </p>
                </div>
                
              </div>
              <div className="card-body">
              <h4 className="text-black text-shadow">{props.restaurant.restaurantName}</h4>
                <p className="text-sm text-muted mb-3">{props.restaurant.restaurantDescription}</p>
                <p> &#8377; {props.restaurant.restaurantAverageprice} for two</p>
               
              </div>
            </div>
          </div>
    </>
}
export default RestaurantCard;


