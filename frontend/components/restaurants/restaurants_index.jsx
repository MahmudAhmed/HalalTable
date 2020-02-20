import React from "react";
import RestaurantIndexItems from "./restaurant_index_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";



class RestaurantsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    const display = restaurants.map( restaurant => (
      <RestaurantIndexItems 
      key={restaurant.id}
      restaurant={restaurant} 
      />)
    ) 
      debugger
    return (
      <>
        <div className="splash-form-container">
          <section className="splash-form">
            <h1 className="splash-form-title">
              Find your table for any occasion
            </h1>
            <form>
              <section>
                <div className="splash-date-time-size">
                  <div className="splash-date">
                    <FontAwesomeIcon
                      icon={["far", "calendar"]}
                      className="splash-calendar-icon"
                    />
                    <input type="date" />
                  </div>

                  <div className="splash-time">
                    <FontAwesomeIcon
                      icon={["far", "clock"]}
                      className="splash-clock-icon"
                    />
                    <select value="10:00 am">
                      {" "}
                      <option>10:00 am</option>
                      <option>Time</option>
                    </select>
                  </div>

                  <div className="splash-size">
                    <FontAwesomeIcon
                      icon={["far", "user"]}
                      className="splash-party-icon"
                    />
                    <select value="1" id="splash-size">
                      {" "}
                      <option>1</option>
                      <option>Size</option>
                    </select>
                  </div>
                </div>
              </section>
              <div className="splash-location-container">
                <FontAwesomeIcon icon="map-marker-alt" className="splash-location-icon" />
                <select className="splash-location-select">
                  <option>NYC/Manhattan</option>
                  <option>Brooklyn</option>
                  <option>Queens</option>
                  <option>Bronx</option>
                  <option>Staten Island</option>
                  <option>Long Island</option>
                </select>
              </div>
              <button className="btn" id="splash-btn">
                Let's go
              </button>
            </form>
          </section>
        </div>
        <div className="index-page">
          <div className="filter-bar"></div>
          <div className="restaurants-index">
            <div className="top-index-section">
              <div className="top-index-border"></div>
              <span className="top-index-text">100% Zabihah Halal</span>
              <FontAwesomeIcon icon="hamburger" className="top-index-icon" />
            </div>
            <ul>{display}</ul>
          </div>
        </div>
      </>
    );
  }

}

export default RestaurantsIndex;