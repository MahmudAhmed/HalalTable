import React from "react"; 
import StarRatings from "react-star-ratings";
import { Link, withRouter } from "react-router-dom";



class RestaurantIndexItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: min,
      time: new Date(),
      partySize: 2, 
      slots: []
    }
  }
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
          <Link to={`/restaurants/${restaurant.id}`} target="_blank">
            <img src="https://resizer.otstatic.com/v2/photos/legacy/1/24851452.jpg" />
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
                starDimension="20px"
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

const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay)
  .toISOString()
  .slice(0, 10);

const getRestaurantHours = (open, close) => {
  if (!open) return [];
  const openTime = new Date(open);
  let utcOpenTime = new Date(openTime.getTime() + openTime.getTimezoneOffset() * 60000);
  const closeTime = new Date(close);
  let utcCloseTime = new Date(closeTime.getTime() + closeTime.getTimezoneOffset() * 60000);
  if (openTime > closeTime) utcCloseTime.setDate(utcCloseTime.getDate() + 1);
  const restaurantHours = [];
  while (true) {
    if (utcOpenTime.getTime() > utcCloseTime.getTime()) break;
    restaurantHours.push(new Date(utcOpenTime.getTime()));
    utcOpenTime.setHours(utcOpenTime.getHours() + 1);
  };
  return restaurantHours
}