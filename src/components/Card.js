import React from 'react'

function Card(props){
    const getRating = ()=>{
      // <i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-warning"></i><i className="fa fa-star text-gray-300">                    </i>
      let res = [];
      let c =0
      for(let i=0;i<Math.round(props.cardData.rating);i++){
        res.push(<i className="fa fa-star text-warning" key={i}></i>)
        c++;
      }
      for(let i=c;i<5;i++){
        res.push(<i key={i} className="fa fa-star text-gray-300">                    </i>)
      }
      return res;
    }
    return <>
    <div className="col-sm-6 col-lg-4 mb-5 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
            <div className="card h-100 border-0 shadow">
              <div className="card-img-top overflow-hidden dark-overlay bg-cover" style={{backgroundImage : `url(${props.cardData.source})`, minHeight: '200px'}}><a className="tile-link" href="detail.html"></a>
                <div className="card-img-overlay-bottom z-index-20">
                  <h4 className="text-white text-shadow">{props.cardData.title}</h4>
                  <p className="mb-2 text-xs">{getRating()}
                  </p>
                </div>
                
              </div>
              <div className="card-body">
                <p className="text-sm text-muted mb-3">{props.cardData.description}</p>
                <p className="text-sm text-muted text-uppercase mb-1">By <a href="#" className="text-dark">Matt Damon</a></p>
                <p className="text-sm mb-0"><a className="me-1" href="#">Restaurant,</a><a className="me-1" href="#">Contemporary</a>
                </p>
              </div>
            </div>
          </div>
    </>
}
export default Card;