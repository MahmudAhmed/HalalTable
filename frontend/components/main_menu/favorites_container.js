import { connect } from "react-redux";
import Favorites from "./favorites";
import { requestFavorites, deleteFavorite } from "../../actions/favorites_action";

const mSTP = ({ entities, session }) => {
  return {
    userId: session.id,
    favorites: Object.values(entities.favorites) || []
  }
};

const mDTP = (dispatch) => ({
  requestFavorites: (userId) => dispatch(requestFavorites(userId)),
  deleteFavorite: (userId, favoriteId) => dispatch(deleteFavorite(userId, favoriteId))
});

export default connect(mSTP, mDTP)(Favorites);

