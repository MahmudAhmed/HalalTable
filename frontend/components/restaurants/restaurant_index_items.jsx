import React from "react"; 
import StarRatings from "react-star-ratings";
import { Link, withRouter } from "react-router-dom";

class RestaurantIndexItems extends React.Component {
  render() {
    const { restaurant } = this.props;
    if (!restaurant.overall_ratings) return null;
    return (
      <li className="restaurant-index-item">
        <div className="index-image">
          <Link to={`/restaurants/${restaurant.id}`} target="_blank">
            <img src={restaurant.photoUrl} />
          </Link>
        </div>
        <div className="restaurant-details">
          <h1>
            <Link to={`/restaurants/${restaurant.id}`} target="_blank">
              {restaurant.name}
            </Link>
          </h1>
          <div className="index-reviews">
            {
              <StarRatings
                rating={restaurant.overall_ratings || 5}
                starDimension="22px"
                starSpacing="1px"
                starRatedColor="orange"
              />
            }
          </div>
          <section className="price-cuisines-city">
            <span className="pcc" id="price-range">
              {restaurant.price_range}
            </span>
            <span className="pcc addBulletPoint" id="cuisines">
              {restaurant.cuisines}
            </span>
            <span className="pcc addBulletPoint" id="city">
              {restaurant.city}
            </span>
          </section>
          <ul className="index-buttons-container">
            <li className="index-buttons" >
              <Link to={`/restaurants/${restaurant.id}`} target="_blank">
                <span>Reserve now</span>
              </Link>
            </li>
            <li className="index-buttons" >
              <Link to={`/restaurants/${restaurant.id}`} target="_blank">
                <span>Get details</span>
              </Link>
            </li>
          </ul>
        
        </div>
      </li>
    );
  }
}

export default withRouter(RestaurantIndexItems);
