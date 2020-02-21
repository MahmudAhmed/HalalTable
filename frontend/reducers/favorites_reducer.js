import { merge } from "lodash";
import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorites_action";

const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITES:
      debugger
      return Object.assign(action.favorites)
    case RECEIVE_FAVORITE:
      debugger
      return merge({}, state, action.favorite)
    case REMOVE_FAVORITE:
      debugger
      const favorites = Object.assign({}, state)
      delete favorites[action.favoriteId]
      return favorites
    default:
      return state;
  }
}

export default favoritesReducer;


