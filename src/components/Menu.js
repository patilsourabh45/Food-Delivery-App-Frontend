import Dishes from "./Dishes";
import Buynow from "./Buynow";
import { useParams } from "react-router-dom";
import { useState } from "react";
import '../css/App.css'


function Menu(){
    
    var {id}=useParams()
    //use useEffect here to call API
 
    return <>
    <h1>My Restaurant Menu</h1>
    <hr></hr>
    <Dishes name="Paneer" value="120" ></Dishes>
    <Dishes name="Biryani" value="200"></Dishes>
    <Dishes name="Chicken" value="250"></Dishes>
    <Dishes name="Bhel" value="50"></Dishes>
    <Dishes name="Kulfi" value="120" ></Dishes>
    <Dishes name="Icecream" value="200"></Dishes>
    <Dishes name="Tandoor" value="250"></Dishes>
    <Dishes name="Panipuri" value="50"></Dishes>
    <Dishes name="Pizza" value="120" ></Dishes>
    <Dishes name="Burger" value="200"></Dishes>
    <Dishes name="Dabeli" value="250"></Dishes>
    <Dishes name="Shevpuri" value="50"></Dishes>
    <Buynow></Buynow>
    
    
    </>
}
export default Menu;