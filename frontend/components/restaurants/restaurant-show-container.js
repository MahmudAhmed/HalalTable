import { connect } from "react-redux";
import RestaurantShow from "./restaurant-show";
import { deleteFavorite, createFavorite, requestFavorites } from "../../actions/favorites_action";

import {
  requestRestaurant
} from "../../actions/restaurant_action";

const mSTP = ({ entities, session }, ownProps) => {
  const tempMenu = { menu_items: {item_1: ""} } 

  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId],
    reviews: Object.values(entities.reviews),
    menu: entities.menus[ownProps.match.params.restaurantId] || tempMenu,
    userId: session.id,
    loggedIn: Boolean(session.id),
    favorites: Object.values(entities.favorites) || []
  }
};

const mDTP = dispatch => ({
  requestRestaurant: restaurantId => dispatch(requestRestaurant(restaurantId)),
  requestFavorites: userId => dispatch(requestFavorites(userId)),
  deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId)),
  createFavorite: (formData, userId) => dispatch(createFavorite(formData, userId)),
});

export default connect(mSTP, mDTP)(RestaurantShow);
