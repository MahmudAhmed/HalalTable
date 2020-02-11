import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT
} from "../actions/restaurant_action";
import { merge } from "lodash";

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, action.restaurants);
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: action.restaurant });
    default:
      return state;
  }
};

export default restaurantsReducer;
