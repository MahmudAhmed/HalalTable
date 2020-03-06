import * as APIUtil from "../util/favorites_util";

///const

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS"

////regular actions

const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
});

const receiveFavoriteErrors = errors => ({
  type: RECEIVE_FAVORITE_ERRORS,
  errors
});



///thunk actions

export const requestFavorites = (userId) => dispatch => {
  return APIUtil.fetchFavorites(userId).then(
    (favorites) => dispatch(receiveFavorites(favorites))
  );
};

export const createFavorite = (formData, userId) => dispatch => {
  return APIUtil.createFavorite(formData, userId).then(
    (favorite) => {
      dispatch(receiveFavorite(favorite))
    },
    (err) => {
      dispatch(receiveFavoriteErrors(err.responseJSON))
    }
  );
};


export const deleteFavorite = (userId, favoriteId) => dispatch => {
  return APIUtil.deleteFavorite(userId, favoriteId).then(
    () => dispatch(removeFavorite(favoriteId)),
    (err) => dispatch(receiveFavoriteErrors(err.responseJSON))
  );
};