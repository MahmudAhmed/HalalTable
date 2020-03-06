import React from "react";
import FavoriteIndexItem from "./favorite_index_items";

class Favorites extends React.Component {
  componentDidMount() {
    const { requestFavorites, userId } = this.props;
    requestFavorites(userId)
  }

  render() {
    const { favorites, deleteFavorite, userId } = this.props;
    const faveList = favorites.length > 0 ? favorites.map(favorite => <FavoriteIndexItem key={favorite.id} favorite={favorite} deleteFavorite={deleteFavorite} userId={userId} />)
      : <p className="no-fave">You have no favorite restaurants to show on this list.</p>
    return (
      <div className="reservation-index-container">
        <section className="reservation-upcoming-container">
          <h1 className="favorites-title">Saved Restaurants</h1>
          <div className="favorite-index-item">
            {faveList}
          </div>
        </section>
      </div>
    )
  }
}

export default Favorites;
