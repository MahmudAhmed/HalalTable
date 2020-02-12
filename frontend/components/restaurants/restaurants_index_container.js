import { connect } from "react-redux";
import RestaurantsIndex from "./restaurants_index";
import { requestRestaurants, requestRestaurant } from "../../actions/restaurant_action";



const mSTP = ({entities}) => ({
  restaurants: Object.values(entities.restaurants) 
});


const mDTP = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants()),
  // requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId))
});

export default connect(mSTP, mDTP)(RestaurantsIndex);

