import { connect } from "react-redux";
import RestaurantShow from "./restaurant-show";

import {
  requestRestaurant
} from "../../actions/restaurant_action";

const mSTP = ({ entities }, ownProps) => {
  // debugger
  // debugger
  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId]
  }
};

const mDTP = dispatch => ({
  requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
  // requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(RestaurantShow);
