import '../css/Aboutus.css'
import Founder from '../images/Founder.jpg'
import CEO from '../images/CEO.jpg'
import Chairman from '../images/Chairman.jpg'
import Director from '../images/Director.jpg'
function Aboutus() {
    return (
        <>
            <h1 className="row1">About Us</h1>
            <p className="aboutus">At Swiggy, we build products & solutions that redefine the food ordering & delivery space in India, every single day. The best part?
                Every bit of your work at Swiggy will help us change the way India eats!</p>

            <div className="row row-cols-1 row-cols-md-4 g-4" >
                <div className="col" >
                    <div className="card" style={{borderRadius:'10px'}}>
                        <img src={Founder} className="card-img-top" height="300px" alt="..." />
                        <div className="card-body">
                            
                            <h5 className="card-title">Founder</h5>
                            <p className="card-text"><h5 style={{fontWeight:700}}>Mr. Amol Patil</h5></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={CEO} className="card-img-top" height="300px" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CEO</h5>
                            <p className="card-text"><h5 style={{fontWeight:700}}>Mr. Amit Patil</h5></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={Chairman} className="card-img-top" height="300px" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Chairman</h5>
                            <p className="card-text"><h5 style={{fontWeight:700}}>Mr. Chinmay Patil</h5></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={Director} className="card-img-top" height="300px" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Managing Director</h5>
                            <p className="card-text"><h5 style={{fontWeight:700}}>Mr. Sourabh Patil</h5></p>
                        </div>
                    </div>
                </div>
            </div>

            <div><p className="aboutus">Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p></div>
        </>
    );
}
export default Aboutus;