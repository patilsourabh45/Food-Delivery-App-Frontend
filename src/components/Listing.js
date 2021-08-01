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
        console.log(resp);
      })
      .catch(() => {
        let resp = {
          data: [
            {
              id: 23,
              title: "title 23",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ngrhdmlxm4eriy9rj0wz",
              description: " 3 to 4 words desc",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 2,
              title: "title 2",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i1klgny2esmjqeoz8hsg",
              description: " 3 to 4 words desc",
              rating: 5,
              avgPrice: 300,
            },
            {
              id: 3,
              title: "title 3",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czyvgxfuosm00dxkzpcf",
              description: " 3 to 4 words desc",
              rating: 3,
              avgPrice: 300,
            },
            {
              id: 4,
              title: "title 4",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0zhkvhtuwxab3xstmko",
              description: " 3 to 4 words desc",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 1,
              title: "title 1",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ngrhdmlxm4eriy9rj0wz",
              description: " 3 to 4 words desc",
              rating: 4,
              avgPrice: 300,
            },
            {
              id: 5,
              title: "title 5",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/i1klgny2esmjqeoz8hsg",
              description: " 3 to 4 words desc",
              rating: 5,
              avgPrice: 300,
            },
            {
              id: 6,
              title: "title 6",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/czyvgxfuosm00dxkzpcf",
              description: " 3 to 4 words desc",
              rating: 3,
              avgPrice: 300,
            },
            {
              id: 7,
              title: "title 7",
              source:
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g0zhkvhtuwxab3xstmko",
              description: " 3 to 4 words desc",
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
