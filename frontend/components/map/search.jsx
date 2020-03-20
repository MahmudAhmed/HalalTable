import React from "react";
import AllRestaurant from "./all_restaurants";
import SearchMap from "./search_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends React.Component {
  componentDidMount(){
    this.props.requestRestaurants();
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push("/restaurants");
  }
  render() {
    const {restaurants, requestRestaurants} = this.props;
    return(
      <div id="search-map-page">
        <div className="search-map-container">
          <div className="search-map">
            <SearchMap restaurants={restaurants} requestRestaurants={requestRestaurants} />
          </div>
          <div>
              <div id="list-header">
                <p>
                  {Object.values(restaurants).length} restaurants
                </p>
                <div className="list-icon" onClick={this.handleClick.bind(this)}>
                  <FontAwesomeIcon icon="list" />
                  <button>List</button>
                </div>
              </div>
              <AllRestaurant restaurants={restaurants} requestRestaurants={requestRestaurants} />
          </div>
        </div>
      </div>
    )
  }

}

export default Search; 