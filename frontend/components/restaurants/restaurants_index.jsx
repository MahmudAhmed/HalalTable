import React from "react";
import RestaurantIndexItems from "./restaurant_index_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";
import { EMOJIS } from "../../util/emojis_util";
class RestaurantsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
      price: [],
      rating: 0,
      cuisines: props.location.state ? [props.location.state.cuisine] : [],
      locations: props.location.state && props.location.state.city ? [props.location.state.city] : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handlePriceClick = this.handlePriceClick.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
    this.handleCuisineClick = this.handleCuisineClick.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.handleMapViewClick = this.handleMapViewClick.bind(this);
  }

  componentDidMount() {
    this.sendFilters();
  }

  handleChange(field) {
    return e => {
      e.preventDefault();
      if (field === "city"){
        this.setState({ locations: [e.target.value] });
        return;
      }
      this.setState({ [field]: (field === "time" ? new Date(e.target.value) : e.target.value) })
    }
  }

  handleBtnClick(e){
    e.preventDefault();
    this.sendFilters();
  }

  displayRandomEmoji(){
    return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  }

  sendFilters(){
    this.props.requestRestaurants({
      price: this.state.price,
      rating: this.state.rating,
      cuisines: this.state.cuisines,
      city: this.state.locations,
    })
  }

  handlePriceClick(price){
    return e => {
      if (this.state.price.indexOf(price) === -1){
        e.target.classList.add("price-selected")
        this.setState({
          price: [...this.state.price, price]
        }, () => this.sendFilters())
      } else {
        e.target.classList.remove("price-selected")
        this.setState({ price: this.state.price.filter(p => p != price) }, () => this.sendFilters())
      }
    }
  }

  handleRatingClick(e) {
    e.preventDefault();
    this.setState({ rating: e.target.value }, () => this.sendFilters());
  }

  handleCuisineClick(cuisine) {
    return e => {
      if (this.state.cuisines.indexOf(cuisine) === -1) {
        this.setState({
          cuisines: [...this.state.cuisines, cuisine]
        }, () => this.sendFilters())
      } else {
        this.setState({ cuisines: this.state.cuisines.filter(p => p != cuisine) }, () => this.sendFilters())
      }
    }
  }

  handleLocationClick(city){
    return e => {
      if (this.state.locations.indexOf(city) === -1) {
        this.setState({
          locations: [...this.state.locations, city]
        }, () => this.sendFilters())
      } else {
        this.setState({ locations: this.state.locations.filter(p => p != city) }, () => this.sendFilters())
      }
    }
  }

  handleMapViewClick(e){
    e.preventDefault();
    this.props.history.push("/maps");
  }

  render() {
    const { restaurants } = this.props;
    const display = restaurants.length === 0 ? 
    <div className="notfound">
      <h1>{this.displayRandomEmoji()}</h1>
      <h3>No Restaurants found...</h3>
    </div>: restaurants.map(restaurant => (
      <RestaurantIndexItems key={restaurant.id} restaurant={restaurant}/>
    ));
    return (
      <>
        <div className="splash-form-container">
          <section className="splash-form">
            <h1 className="splash-form-title">
              Find your table for any occasion
            </h1>
            <form>
              <div className="splash-location-container">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  className="splash-location-icon"
                />
                <select
                  className="splash-location-select"
                  value={this.state.locations[0] || "All"}
                  onChange={this.handleChange("city")}
                >
                  <option value="All">All New York / Tri-State Area</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Staten Island">Staten Island</option>
                </select>
              </div>
              <button
                className="btn"
                id="splash-btn"
                onClick={this.handleBtnClick}
              >
                Let's go
              </button>
            </form>
          </section>
        </div>
        <div className="index-page-container">
          <div className="index-page">
            <div className="filter-bar">
              <section className="map-view-container">
                <div className="map-view-btn" onClick={this.handleMapViewClick}>
                  <div>
                    <FontAwesomeIcon
                      icon={["far", "map"]}
                      className="filter-icon"
                    />
                    <button>Map</button>
                  </div>
                </div>
              </section>
              <section className="price-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon
                    icon={["far", "money-bill-alt"]}
                    className="filter-icon"
                  />
                  <span>Price</span>
                </div>
                <ul className="price-filter-items">
                  <li
                    onClick={this.handlePriceClick("$")}
                    title="$30 and under"
                  >
                    $
                  </li>
                  <li onClick={this.handlePriceClick("$$")} title="$31 and $50">
                    $$
                  </li>
                  <li
                    onClick={this.handlePriceClick("$$$")}
                    title="$50 and over"
                  >
                    $$$
                  </li>
                </ul>
              </section>
              <section className="ratings-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon icon="trophy" className="filter-icon" />
                  <span>Rating</span>
                </div>
                <div className="rating-filter-items">
                  <div>
                    <input
                      name="ratings-filter"
                      type="radio"
                      value="5"
                      checked={this.state.rating === "5"}
                      onChange={this.handleRatingClick}
                    />
                    <StarRatings
                      rating={5}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                  </div>
                  <div>
                    <input
                      name="ratings-filter"
                      type="radio"
                      value="4"
                      checked={this.state.rating === "4"}
                      onChange={this.handleRatingClick}
                    />
                    <StarRatings
                      rating={4}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                    <span> & up</span>
                  </div>
                  <div>
                    <input
                      name="ratings-filter"
                      type="radio"
                      value="3"
                      checked={this.state.rating === "3"}
                      onChange={this.handleRatingClick}
                    />
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
                  <FontAwesomeIcon icon="utensils" className="filter-icon" />
                  <span>Cuisine</span>
                </div>
                <ul className="cuisine-filter-items">
                  <li>
                    <input
                      type="checkbox"
                      value="Afgan"
                      onClick={this.handleCuisineClick("Afgan")}
                      defaultChecked={this.state.cuisines.includes("Afgan")}
                    />
                    <label>Afgan</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Barbeque"
                      onClick={this.handleCuisineClick("Barbeque")}
                      defaultChecked={this.state.cuisines.includes("Barbeque")}
                    />
                    <label>Barbeque</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Burgers & Wings"
                      onClick={this.handleCuisineClick("Burgers & Wings")}
                      defaultChecked={this.state.cuisines.includes(
                        "Burgers & Wings"
                      )}
                    />
                    <label>Burgers & Wings</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Indian"
                      onClick={this.handleCuisineClick("Indian")}
                      defaultChecked={this.state.cuisines.includes("Indian")}
                    />
                    <label>Indian</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Middle Eastern"
                      onClick={this.handleCuisineClick("Middle Eastern")}
                      defaultChecked={this.state.cuisines.includes(
                        "Middle Eastern"
                      )}
                    />
                    <label>Middle Eastern</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Seafood"
                      onClick={this.handleCuisineClick("Seafood")}
                      defaultChecked={this.state.cuisines.includes("Seafood")}
                    />
                    <label>Seafood</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Turkish"
                      onClick={this.handleCuisineClick("Turkish")}
                      defaultChecked={this.state.cuisines.includes("Turkish")}
                    />
                    <label>Turkish</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Vegetarian"
                      onClick={this.handleCuisineClick("Vegetarian")}
                      defaultChecked={this.state.cuisines.includes("Vegetarian")}
                    />
                    <label>Vegetarian</label>
                  </li>
                </ul>
              </section>
              <section className="city-filter-container">
                <div className="filters-title">
                  <FontAwesomeIcon
                    icon={["far", "building"]}
                    className="filter-icon"
                  />
                  <span>Location</span>
                </div>
                <ul className="city-filter-items">
                  <li>
                    <input
                      type="checkbox"
                      value="Manhattan"
                      onClick={this.handleLocationClick("Manhattan")}
                      checked={this.state.locations.includes(
                        "Manhattan"
                      )}
                    />
                    <label>Manhattan</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Brooklyn"
                      onClick={this.handleLocationClick("Brooklyn")}
                      checked={this.state.locations.includes("Brooklyn")}
                    />
                    <label>Brooklyn</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Queens"
                      onClick={this.handleLocationClick("Queens")}
                      checked={this.state.locations.includes("Queens")}
                    />
                    <label>Queens</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Bronx"
                      onClick={this.handleLocationClick("Bronx")}
                      checked={this.state.locations.includes("Bronx")}
                    />
                    <label>Bronx</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      value="Staten Island"
                      onClick={this.handleLocationClick("Staten Island")}
                      checked={this.state.locations.includes(
                        "Staten Island"
                      )}
                    />
                    <label>Staten Island</label>
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
