import * as APIUtil from "../util/reviews_util";

///const

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";

////regular actions

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});


///thunk actions

export const requestReviews = (restaurantId) => dispatch => {
  return APIUtil.fetchReviews(restaurantId).then(
    (reviews) => dispatch(receiveReviews(reviews))
  );
};