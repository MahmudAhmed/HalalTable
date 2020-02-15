import React from "react";
// import MarkerManager from "../../util/marker_manager";
import { withRouter } from "react-router-dom";

class RestaurantMap extends React.Component {


  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        <h1>the map</h1>
      </div>
    )
  }
}


export default withRouter(RestaurantMap);