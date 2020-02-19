import React from "react"; 
import StarRatings from "react-star-ratings";
import { Link, withRouter } from "react-router-dom";

class RestaurantIndexItems extends React.Component {
  // constructor(props){
    
  // }
  // componentDidMount(){
  //   const { restaurant, requestRestaurant } = this.props;
  //   requestRestaurant(restaurant.id)
  // }

  render() {
    const { restaurant } = this.props;
    debugger
    if (!restaurant.overall_ratings) return null;
    return (
      <li className="restaurant-index-item">
        <div className="index-image">
          <Link to={`/restaurants/${restaurant.id}`}>
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
          </Link>
        </div>
        <div className="restaurant-details">
          <h1><Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link></h1>
          <div className="index-reviews">
            {<StarRatings
              rating={restaurant.overall_ratings || 5}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="orange"
            />}
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
          {/* <ul className="time-slot-container">
            <li className="time-slot">
              <a href="#">
                <span>6:00 PM</span>
              </a>
            </li>
            <li className="time-slot">
              <a href="#">
                <span>6:30 PM</span>
              </a>
            </li>
            <li className="time-slot">
              <a href="#">
                <span>7:00 PM</span>
              </a>
            </li>
            <li className="time-slot">
              <a href="#">
                <span>7:30 PM</span>
              </a>
            </li>
          </ul> */}
        </div>
      </li>
    );
  }

}

export default withRouter(RestaurantIndexItems);