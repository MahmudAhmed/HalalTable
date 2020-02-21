import { RECEIVE_FAVORITE, REMOVE_FAVORITE, RECEIVE_FAVORITE_ERRORS } from "../actions/favorites_action";


const favoritesErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITE:
      return [];
    case REMOVE_FAVORITE:
      return [];
    case RECEIVE_FAVORITE_ERRORS:
      return action.errors;
    default:
      return state;
  }

}

export default favoritesErrorsReducer;

