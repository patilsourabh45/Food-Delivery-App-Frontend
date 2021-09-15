import { useState } from "react";
import '../css/Menu.css';
import Cartcounter from "./Cartcounter";
function Dishes(props) {
    return (
        <>
            <div class="container">  
                <div class="row">
                    <div class="col">
                    <h4 className="Price">{props.name}</h4>   
                    </div>
                    <div class="col">
                    <span> &#8377; {props.value}</span>
                    </div>
                    <div class="col">
                    <Cartcounter className="Price"></Cartcounter>
                    </div>
                </div>
            </div>
            <hr></hr>


            

        </>
    );

}
export default Dishes;