import { connect } from "react-redux";
import RestaurantShow from "./restaurant-show";

import {
  requestRestaurant
} from "../../actions/restaurant_action";

const mSTP = ({ entities }, ownProps) => {
  const tempMenu = { menu_items: {item_1: ""} } 
  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId],
    reviews: Object.values(entities.reviews),
    menu: entities.menus[ownProps.match.params.restaurantId] || tempMenu
  }
};

const mDTP = dispatch => ({
  requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(RestaurantShow);
