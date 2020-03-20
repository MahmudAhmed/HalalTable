class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(restaurants) {
    const restaurantMarkers = {}
    Object.values(this.markers).forEach( res => this.removeMarker(res));
    Object.values(restaurants).forEach(restaurant => {
      restaurantMarkers[restaurant.id] = this.createMarkerFromRestaurant(restaurant)
    })
    const markerIds = Object.keys(this.markers)

    this.markers = Object.assign({}, this.markers, restaurantMarkers)

    markerIds.forEach(id => {
      if (!restaurants[id]) {
        this.removeMarker(this.markers[id])
      }
    })
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id]
  }

  createMarkerFromRestaurant(restaurant) {
    const latLng = { lat: restaurant.lat, lng: restaurant.lng };
    var infowindow = new google.maps.InfoWindow({
      content: (`<div id=marker-title>${restaurant.name}</div>`)
    });

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: restaurant.name,
      id: restaurant.id,
      animation: google.maps.Animation.DROP
    });

    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
      $('#marker-title').parent().parent().parent().siblings().addClass("info-window")
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    });

    return marker
  }
}

export default MarkerManager;