import React from "react";
import RestaurantIndexItems from "./restaurant_index_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";



class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: min,
      time: new Date("Sat, 01 Jan 2000 10:00:00 UTC +00:00"),
      partySize: 2,
      slots: [],
      city: "NYC/Manhattan",
      price: [],
      cuisine: []
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
  }

  componentDidMount() {
    this.props.requestRestaurants();
    this.timeSlots = getRestaurantHours(
      new Date("Sat, 01 Jan 2000 10:00:00 UTC +00:00"),
      new Date("Sat, 01 Jan 2000 00:00:00 UTC +00:00")
    );
  }

  handleChange(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: (field === "time" ? new Date(e.target.value) : e.target.value) })
    }
  }

  handleBtnClick(e){
    e.preventDefault();
    this.props.requestRestaurants({city: this.state.city, price: this.state.price});
  }

  handlePriceClick(price){
    const statePrice = this.state.price;
    let priceFilters;
    const that = this;
    return e => {
      if (statePrice.indexOf(price) === -1){
        e.target.classList.add("price-selected")
        that.setState({
          price: [...statePrice, price]
        })
        priceFilters = [...statePrice, price]
      } else {
        e.target.classList.remove("price-selected")
        that.setState({ price: statePrice.filter( p => p != price )})
        priceFilters = statePrice.filter(p => p != price)
      }
      that.props.requestRestaurants({ city: that.state.city, price: priceFilters});
    }
  }

  handleRatingClick(){

  }

  render() {
    const { restaurants } = this.props;
    if (!this.timeSlots) return null;
    const partySize = Array(20)
    .fill()
    .map((_, i) => (
      <option key={i + 1} id="select-option" value={`${i + 1}`}>
          {i + 1}
      </option>
    ));

    // debugger
    const display = restaurants.map(restaurant => (
      <RestaurantIndexItems key={restaurant.id} restaurant={restaurant} formData={this.state} />
    ));
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
                    <input
                      type="date"
                      className="show-res-input"
                      min={min}
                      value={this.state.date}
                      onChange={this.handleChange("date")}
                    />
                  </div>

                  <div className="splash-time">
                    <FontAwesomeIcon
                      icon={["far", "clock"]}
                      className="splash-clock-icon"
                    />
                    <select value={this.state.time} onChange={this.handleChange("time")}>
                      {" "}
                      {this.timeSlots.map((time, i) => (
                        <option key={i} id="select-option" value={time}>
                          {time.toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true
                          })}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="splash-size">
                    <FontAwesomeIcon
                      icon={["far", "user"]}
                      className="splash-party-icon"
                    />
                    <select
                      value={this.state.partySize}
                      id="splash-size"
                      onChange={this.handleChange("partySize")}
                    >
                      {" "}
                      {partySize}
                    </select>
                  </div>
                </div>
              </section>
              <div className="splash-location-container">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  className="splash-location-icon"
                />
                <select className="splash-location-select" value={this.state.city} onChange={this.handleChange("city")}>
                  <option value="NYC/Manhattan">NYC/Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Staten Island">Staten Island</option>
                  <option value="Long Island">Long Island</option>
                </select>
              </div>
              <button className="btn" id="splash-btn" onClick={this.handleBtnClick}>
                Let's go
              </button>
            </form>
          </section>
        </div>
        <div className="index-page-container">
          <div className="index-page">
            <div className="filter-bar">
              <section className="price-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon
                    icon={["far", "money-bill-alt"]}
                    className="filter-icon"
                  />
                  <span>Price</span>
                </div>
                <ul className="price-filter-items">
                  <li onClick={this.handlePriceClick("$")} title="$30 and under">$</li>
                  <li onClick={this.handlePriceClick("$$")} title="$31 and $50">$$</li>
                  <li onClick={this.handlePriceClick("$$$")} title="$50 and over">$$$</li>
                </ul>
              </section>
              <section className="ratings-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon
                    icon="trophy"
                    className="filter-icon"
                  />
                  <span>Rating</span>
                </div>
                <div className="rating-filter-items">
                  <div>
                    <input type="checkbox" value="" />
                    <StarRatings
                      rating={5}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                  </div>
                  <div>
                    <input type="checkbox" value="" />
                    <StarRatings
                      rating={4}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                    <span> & up</span>
                  </div>
                  <div>
                    <input type="checkbox" value="" />
                    <StarRatings
                      rating={3}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                    <span> & up</span>
                  </div>
                </div>
              </section>
              <section className="cuisine-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon
                    icon="utensils"
                    className="filter-icon"
                  />
                  <span>Cuisine</span>
                </div>
                <ul className="cuisine-filter-items">
                  <li>
                    <input type="checkbox" value="Afgan" />
                    <label>Afgan</label>
                  </li>
                  <li>
                    <input type="checkbox" value="Barbeque" />
                    <label>Barbeque</label>
                  </li>
                  <li>
                    <input type="checkbox" value="Burgers & Wings" />
                    <label>Burgers & Wings</label>
                  </li>
                  <li>
                    <input type="checkbox" value="Middle Eastern" />
                    <label>Middle Eastern</label>
                  </li>
                  <li>
                    <input type="checkbox" value="Turkish" />
                    <label>Turkish</label>
                  </li>
                </ul>
              </section>
            </div>
            <div className="restaurants-index">
              <div className="top-index-section">
                <div className="top-index-border"></div>
                <span className="top-index-text">100% Zabihah Halal</span>
                <FontAwesomeIcon icon="hamburger" className="top-index-icon" />
              </div>
              <ul>{display}</ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RestaurantsIndex;



const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay).toISOString().slice(0, 10);

const getRestaurantHours = (open, close) => {

  if (!open) return [];
  const openTime = new Date(open);
  let utcOpenTime = new Date(
    openTime.getTime() + openTime.getTimezoneOffset() * 60000
  );
  const closeTime = new Date(close);
  let utcCloseTime = new Date(
    closeTime.getTime() + closeTime.getTimezoneOffset() * 60000
  );
  if (openTime > closeTime) utcCloseTime.setDate(utcCloseTime.getDate() + 1);
  const restaurantHours = [];
  while (true) {
    if (utcOpenTime.getTime() > utcCloseTime.getTime()) break;
    restaurantHours.push(new Date(utcOpenTime.getTime()));
    utcOpenTime.setHours(utcOpenTime.getHours() + 1);
  }
  return restaurantHours;
};