import React from "react";
import RestaurantIndexItems from "../restaurants/restaurant_index_items";
import { EMOJIS } from "../../util/emojis_util";

class AllRestaurant extends React.Component {
    
  displayRandomEmoji(){
    return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
  }


  render() {
    const restaurants = Object.values(this.props.restaurants);
    const display = restaurants.length === 0 ?
      <div className="notfound emojis-search-map">
        <h1>{this.displayRandomEmoji()}</h1>
        <h3>No Restaurants found...</h3>
      </div> : restaurants.map(restaurant => (
        <RestaurantIndexItems key={restaurant.id} restaurant={restaurant} />
      ));
    // const restaurants = Object.values(this.props.restaurants).map(restaurant => <RestaurantIndexItem key={restaurant.id} restaurant={restaurant} />)
    return (
      <ul className="search-map-list">
        {display}
      </ul>
    )
  }
}

export default AllRestaurant;