import React from "react"; 
import StarRatings from "react-star-ratings";
import { Link, withRouter } from "react-router-dom";



class RestaurantIndexItems extends React.Component {
  constructor(props) {
    super(props);

    this.timeSlots = getRestaurantHours(
      props.restaurant.open_time,
      props.restaurant.close_time
    );

    this.state = {
      formData: props.formData,
      slots: []
    };
    this.getSlots = this.getSlots.bind(this);
  }

  componentDidMount(){
    this.getSlots()
  }

  componentDidUpdate(prevProps){
    if (prevProps.formData != this.props.formData) {
      
      this.setState({formData: this.props.formData})
      this.getSlots();
    }
  }

  getSlots() {
    // 
    let idx = -1;
    this.availableTime = [];
    const formTime = this.state.formData.time
    const formTimeUTC = new Date(formTime.getTime() + formTime.getTimezoneOffset() * 60000)
    this.timeSlots.forEach((time, i) => {
      if (time.getTime() === formTimeUTC.getTime()) {
        idx = i;
      }
    });
    this.setState({
      slots: []
    })
    if (idx === 0 || idx === -1) {
      this.availableTime[0] = this.timeSlots[0];
      this.availableTime[1] = this.timeSlots[1];
      this.availableTime[2] = this.timeSlots[2];
    } else if (idx === this.timeSlots.length - 1) {
      this.availableTime[0] = this.timeSlots[idx - 2];
      this.availableTime[1] = this.timeSlots[idx - 1];
      this.availableTime[2] = this.timeSlots[idx];
    } else {
      this.availableTime[0] = this.timeSlots[idx - 1];
      this.availableTime[1] = this.timeSlots[idx];
      this.availableTime[2] = this.timeSlots[idx + 1];
    }
    
    this.setState({
      slots: [...this.availableTime]
    });
  }

  render() {
    const { restaurant } = this.props;
    if (!restaurant.overall_ratings) return null;
    // 
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
         
          <ul className="time-slot-container">
            {this.state.slots.map((time, idx) => (
              <li
                key={idx}
                // onClick={this.handleUpdateClick(time)}
                className="time-slot"
              >
                <span>{time.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                })}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }
}

export default withRouter(RestaurantIndexItems);

// const now = new Date();
// const currYear = now.getFullYear();
// const currMonth = now.getMonth();
// const currDay = now.getDate();
// const min = new Date(currYear, currMonth, currDay)
//   .toISOString()
//   .slice(0, 10);

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

