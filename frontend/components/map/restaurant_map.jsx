import React from "react";
import { withRouter } from "react-router-dom";

class RestaurantMap extends React.Component {
  componentDidMount() {
    const { restaurant } = this.props;
    const restaurantLatLng = { lat: restaurant.lat, lng: restaurant.lng}
    const mapOptions = {
      center: restaurantLatLng,
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.marker = new google.maps.Marker({
      position: restaurantLatLng,
      map: this.map,
      title: restaurant.name
    })    
  }

  render() {
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
        <h1>the map</h1>
      </div>
    )
  }
}


export default withRouter(RestaurantMap);