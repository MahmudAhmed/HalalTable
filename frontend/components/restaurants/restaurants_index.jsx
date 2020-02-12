import React from "react";
import RestaurantIndexItems from "./restaurant_index_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";



class RestaurantsIndex extends React.Component {
  // constructor(props){

  // }
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
    return (
      <>
        <nav className="filter-search-bar"></nav>
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