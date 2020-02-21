import React from "react";
import { withRouter } from "react-router-dom";
// import { Map, GoogleApiWrapper } from 'google-maps-react';

class RestaurantMap extends React.Component {
  componentDidMount() {
    debugger
    const restaurantLatLng = { lat: 40.737, lng: -73.946}
    const mapOptions = {
      center: restaurantLatLng,
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // debugger
    this.marker = new google.maps.Marker({
      position: restaurantLatLng,
      map: this.map,
      title: 'Addy\'s BBQ'
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