import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from './Loader';
import RestaurantCard from './RestaurantCard';
import { getRestaurants } from '../api/restaurantApi'
;
const AvailableStates = {
  NEW: 'NEW',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS'
};

class RestaurantComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: AvailableStates.NEW,
      restaurants: []
    };
  }

  componentDidMount() {
    this.setState({ state: AvailableStates.LOADING });
    getRestaurants()
    .then(response => {
      if (response.status === 200) {
        this.setState({ state: AvailableStates.SUCCESS ,
        restaurants: response.data });
      }
      else {
        console.log(`Error occurred ${response.status}`);
        this.setState({ state: AvailableStates.ERROR });
      }
    })
    .catch(error => {
      console.log(error);
      this.setState({ state: AvailableStates.ERROR });
    });
  }

  render() {
    return(
      <>
        {
          this.state.state === AvailableStates.LOADING 
          && <Loader />
        }
        {
          this.state === AvailableStates.ERROR
          && <div> Error occurred </div>
        }
        {
          this.state.state === AvailableStates.SUCCESS
          && (
            <Row>
            { this.state.restaurants.map(   (restaurant, i) =><RestaurantCard restaurant= {restaurant} key={i} />)
            }
            </Row>
          )
        }
      </>
    )
  }
}

export default RestaurantComponent;