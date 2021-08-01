import React from 'react'

import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Listing(props) {
    const [cards,setCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://myjson.dit.upm.es/api/bins/n5i")
      .then((resp) => {
        console.log(JSON.parse(resp));
        setCards(JSON.parse(resp).data);
      })
      .catch(() => {
        let resp ={
         data: [
            {
              id: 23,
              title: "Hotel Season 4",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ngrhdmlxm4eriy9rj0wz",
              description: "Paneer, Maharashtrian Food, Beverages",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 2,
              title: "Galaxy Biryani",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i1klgny2esmjqeoz8hsg",
              description: "Biryani, Chinese, Kabab",
              rating: 5,
              avgPrice: 300,
            },
            {
              id: 3,
              title: "Palvi Hotel",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czyvgxfuosm00dxkzpcf",
              description: "Kaju Masala, Icecream, Juice",
              rating: 3,
              avgPrice: 300,
            },
            {
              id: 4,
              title: "Shake Factory",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0zhkvhtuwxab3xstmko",
              description: "Mango Shake, Mojito, Beverages",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 1,
              title: "Sahyadri Hotel",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ngrhdmlxm4eriy9rj0wz",
              description: "Paneer, Icecream, Pizza",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 5,
              title: "Golden Dum Biryani",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i1klgny2esmjqeoz8hsg",
              description: "Chicken Biryani, Chinese, Chicken Lollipop",
              rating: 5,
              avgPrice: 300,
            },
            {
              id: 6,
              title: "Swarup Hotel",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czyvgxfuosm00dxkzpcf",
              description: "Pizza, Veg Biryani, Icecream",
              rating: 3,
              avgPrice: 300,
            },
            {
              id: 7,
              title: "Greenpark Hotel",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0zhkvhtuwxab3xstmko",
              description: "Juice, Mojito, Shakes",
              rating: 4,
              avgPrice: 300,
            },
            
          ],
        };
        setCards(resp.data)
      });
  }, []);
  const listOfCard = () => {
    let res = [];
    for (let i = 0; i < cards.length; i++) {
      res.push(<Card key={i} cardData={cards[i]}></Card>);
    }
    return res;
  };
  return (
    <>
      <div className="row">{listOfCard()}</div>
    </>
  );
}
export default Listing;