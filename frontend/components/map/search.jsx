import React from "react";
import AllRestaurant from "./all_restaurants";
import SearchMap from "./search_map";

class Search extends React.Component {
  componentDidMount(){
    this.props.requestRestaurants();
  }
  render() {
    const {restaurants, requestRestaurants} = this.props;
    return(
      <div>
        <SearchMap restaurants={restaurants} requestRestaurants={requestRestaurants} />
        <AllRestaurant restaurants={restaurants} requestRestaurants={requestRestaurants} />

      </div>
    )
  }

}

export default Search; 