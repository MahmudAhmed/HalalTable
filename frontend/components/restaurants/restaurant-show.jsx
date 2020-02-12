import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";
import PhotoGallery from "./photo_gallery";

class RestaurantShow extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = this.props.restaurant
  // }

  componentDidMount() {
    // debugger
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render() {
    if (!this.props.restaurant) return null; 
    const { restaurant } = this.props;
    return (
      <section className="show-page">
        <div id="show-page-splash">
          <div id="favorite-button">
            <button className="splash-favorite-button">
              <FontAwesomeIcon
                icon={["far", "bookmark"]}
                color="black"
                className="bookmark-icon"
              />
              <span>Save this retaurant</span>
            </button>
          </div>
          <div
            className="splash-img"
            style={{
              backgroundImage:
                "url(https://resizer.otstatic.com/v2/photos/wide-huge/1/25269985.jpg)"
            }}
          ></div>
        </div>
        <section className="page-content">
          <main className="left-content">
              <ul className="nav-list">
                <li>
                  <a href="#">
                    <span>Overview</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Photos</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Menu</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>Reviews</span>
                  </a>
                </li>
              </ul>

              <div className="restaurant-details">
                <h1 id="restaurant-title">{ restaurant.name }</h1>
                <div className="restaurant-stats">
                  <section id="star-ratings">
                    <StarRatings
                      rating={4.403}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="orange"
                    />
                    <span>4.4</span>
                  </section>
                  <section id="total-reviews">
                    <FontAwesomeIcon
                      icon={["far", "comment-alt"]}
                      className="stats-icon"
                    />
                    <span>451 Reviews</span>
                  </section>
                  <section id="price-range">
                    <FontAwesomeIcon
                      icon={["far", "money-bill-alt"]}
                      className="cash-icon"
                    />
                    <span>$31 to $50</span>
                  </section>
                  <section id="cuisines-type">
                    <FontAwesomeIcon
                      icon="utensils"
                      className="cuisines-icon"
                    />
                    <span>American</span>
                  </section>
                </div>
                <div id="restaurant-overview">
                  The second-ever P.J.'s, overlooking the Hudson River in the Financial District since 2006. Serving up fresh food, frosty drinks and good, old-fashioned conversation.
                </div>
                <div id="gallery-div">
                  <h2>4 Photos</h2>
                  <PhotoGallery />
                </div>



              </div>
          </main>
          <aside className="reservation-forms">
              <h3 className="reservation-form-title">Make a reservation</h3>
          </aside>
        </section>
      </section>
    );
  }
}

export default RestaurantShow;
