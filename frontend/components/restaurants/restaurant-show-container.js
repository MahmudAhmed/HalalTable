import { connect } from "react-redux";
import RestaurantShow from "./restaurant-show";

import {
  requestRestaurant
} from "../../actions/restaurant_action";

const mSTP = ({ entities }, ownProps) => {
  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId],
    reviews: Object.values(entities.reviews)
  }
};

const mDTP = dispatch => ({
  requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(RestaurantShow);
