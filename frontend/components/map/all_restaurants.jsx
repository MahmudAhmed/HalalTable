import React from "react";
import AllRestaurantItem from "./all_restaurant_items";

class AllRestaurant extends React.Component {

  render() {
    const restaurants = Object.values(this.props.restaurants).map(restaurant => <AllRestaurantItem key={restaurant.id} restaurant={restaurant} />)
    return (
      <div>
        {restaurants}
      </div>
    )
  }
}

export default AllRestaurant;