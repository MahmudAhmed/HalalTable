import { RECEIVE_REVIEWS } from "../actions/reviews_action";
import { RECEIVE_RESTAURANTS } from "../actions/restaurant_action";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
     return Object.assign(action.reviews)
    case RECEIVE_RESTAURANTS:
      return [];
    default:
      return state;
  }
}

export default reviewsReducer;


