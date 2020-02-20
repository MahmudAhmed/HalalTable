import * as APIUtil from "../util/restaurant_util";
import { requestReviews } from "./reviews_action";
import { requestMenu } from "./menus_action";

///const

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";


////regular actions

const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

const receiveRestaurants= (restaurants) => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

///thunk actions

export const requestRestaurants = (...args) => dispatch => {
  return APIUtil.fetchRestaurants(...args).then(
    (restaurants) => {
      dispatch(receiveRestaurants(restaurants))
    }
  );
};

export const requestRestaurant = (restaurantId) => dispatch => {
  return APIUtil.fetchRestaurant(restaurantId).then(restaurant => {
    dispatch(receiveRestaurant(restaurant))
    dispatch(requestReviews(restaurantId))
    dispatch(requestMenu(restaurantId))
  });
};