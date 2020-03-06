import * as APIUtil from "../util/reviews_util";

///const

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS"

////regular actions

const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

///thunk actions

export const requestReviews = (restaurantId) => dispatch => {
  return APIUtil.fetchReviews(restaurantId).then(
    (reviews) => dispatch(receiveReviews(reviews))
  );
};

export const createReview = (formData, restaurantId) => dispatch => {
  return APIUtil.createReview(formData, restaurantId).then(
    (review) => {
      dispatch(receiveReview(review))
    },
    (err) => {
      dispatch(receiveReviewErrors(err.responseJSON))
    }
  );
};

export const updateReview = (formData, restaurantId, reviewId) => dispatch => {
  return APIUtil.updateReview(formData, restaurantId, reviewId).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );
};

export const deleteReview = (restaurantId, reviewId) => dispatch => {
  return APIUtil.deleteReview(restaurantId, reviewId).then(
    () => dispatch(removeReview(reviewId)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );
};