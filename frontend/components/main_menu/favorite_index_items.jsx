import React from "react";
import { Link, withRouter } from "react-router-dom";

class FavoriteIndexItem extends React.Component {
  render() {
    const { favorite, deleteFavorite, userId } = this.props;
    return (
      <div className="restaurant-index-item">
        <div className="index-image" id="reservation-item-pic">
          <Link to={`/restaurants/${favorite.restaurant_id}`} target="_blank">
            <img src={favorite.photoUrl} />
          </Link>
        </div>
        <div className="restaurant-details">
          <h1 id="reservation-item-title">
            <Link to={`/restaurants/${favorite.restaurant_id}`} target="_blank">
              {favorite.restaurant_name}
            </Link>
          </h1>
          <section className="modify-reservation-btns" id="reservation-item-buttons">
            <button><Link to={`/restaurants/${favorite.restaurant_id}`}>Reserve Now</Link></button>
            <button onClick={() => deleteFavorite(userId, favorite.id)}>Remove from saved restaurants</button>
          </section>
        </div>
      </div>
    )
  }
}

export default withRouter(FavoriteIndexItem);
