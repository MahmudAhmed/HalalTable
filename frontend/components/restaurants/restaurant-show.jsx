import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoGallery from "./photo_gallery";
import ReviewsIndex from "./reviews_index";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StarRatings from "react-star-ratings";
import ReservationForm from "./reservation_index";

class RestaurantShow extends React.Component {
  
  constructor(props){
    super(props);
    // debugger
    this.stickyHeader = this.stickyHeader.bind(this)

  }
  
  
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }
  
  componentDidUpdate() {
    this.header = document.getElementById("nav-list");

    if (this.header) {
      this.sticky = this.header.offsetTop
    }
   
  }
  
  
  stickyHeader() {
    if ((window.pageYOffset - 317) > this.sticky) {
      this.header.classList.add("sticky");
    } else if (this.header.classList.contains('sticky')) {
      this.header.classList.remove("sticky");
    }
  }

  render() {
    // debugger
    window.addEventListener("scroll", () => this.stickyHeader() )
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
            <ul id="nav-list">
              <li>
                <AnchorLink href="#overview-section" offset="45">
                  <span>Overview</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#photos-section" offset="45">
                  <span>Photos</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#menu-section" offset="45">
                  <span>Menu</span>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#show-review" offset="45">
                  <span>Reviews</span>
                </AnchorLink>
              </li>
            </ul>

            <div className="restaurant-details" id="overview-section">
              <h1 id="restaurant-title">{restaurant.name}</h1>
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
                  <FontAwesomeIcon icon="utensils" className="cuisines-icon" />
                  <span>American</span>
                </section>
              </div>
              <div id="restaurant-overview">
                The second-ever P.J.'s, overlooking the Hudson River in the
                Financial District since 2006. Serving up fresh food, frosty
                drinks and good, old-fashioned conversation.
              </div>
              <div id="gallery-div">
                <h2 className="display-subheader" id="photos-section">
                  Photos
                </h2>
                <PhotoGallery />
              </div>
              <div id="menu-div">
                <h2 className="display-subheader" id="menu-section">
                  Menu
                </h2>
              </div>
              <ReviewsIndex />
            </div>
          </main>
          <ReservationForm restaurant={this.props.restaurant}/>
        </section>
      </section>
    );
  }
}

export default RestaurantShow;
