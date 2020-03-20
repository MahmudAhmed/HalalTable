import React from "react";
import MarkerManager from "../../util/marker_manager";


class SearchMap extends React.Component{

  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.722840, lng: -73.912580 }, // this is SF
      zoom:13
    };

    this.map = new google.maps.Map(this.SearchMapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.restaurants);

    this.map.addListener('idle', () => {
      const bounds = this.map.getBounds();
      const southWest = bounds.getSouthWest();
      const northEast = bounds.getNorthEast();
      this.sendBounds(southWest, northEast);
    });

  }

  sendBounds(sw, ne) {
    const bounds = {
      "northEast": { "lat": ne.lat(), "lng": ne.lng() },
      "southWest": { "lat": sw.lat(), "lng": sw.lng() }
    }
    this.props.requestRestaurants({bounds})
  }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.restaurants);
  }

  render(){
    return <div id="search-map-container" ref={map => this.SearchMapNode = map}>
      <h1>the map</h1>
    </div>
  }

}

export default SearchMap; 