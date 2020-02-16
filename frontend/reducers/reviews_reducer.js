import { merge } from "lodash";
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/reviews_action";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign(action.reviews)
      case RECEIVE_REVIEW:
      return merge( {}, state, action.review)
    case REMOVE_REVIEW:
      const reviews = Object.assign( {}, state )
      delete reviews[action.reviewId]
      return reviews
    default:
      return state;
  }
}

export default reviewsReducer;


