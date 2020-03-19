import React from "react";

class SearchMap extends React.Component{
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.SearchMapNode, mapOptions);
  }


  render(){
    return <div id="search-map-container" ref={map => this.SearchMapNode = map}>
      <h1>the map</h1>
    </div>
  }

}

export default SearchMap; 