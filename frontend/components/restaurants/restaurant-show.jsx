import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoGallery from "./photo_gallery";
import ReviewsIndex from "./reviews_index";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StarRatings from "react-star-ratings";
import ReservationForm from "./reservation_index";

const getPrice = (price_range) => {
  if (price_range === "$$") {
    return "$30 and under"
  } else if (price_range === "$$$") {
    return "$31 to $50"
  } else if (price_range === "$$$$") {
    return "$50 and over"
  }
}

class RestaurantShow extends React.Component {
  
  constructor(props){
    super(props);
    this.stickyHeader = this.stickyHeader.bind(this)
  }
  
  
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }
  
  componentDidUpdate() {
    // this.props.requestRestaurant(this.props.match.params.restaurantId);
    this.header = document.getElementById("nav-list");
    this.resForm = document.getElementById("reservation-forms");
    if (this.header) {
      this.sticky = this.header.offsetTop
    }
   
  }
  
  
  stickyHeader() {
    if (this.header){
      if ((window.pageYOffset - 317) >= this.sticky) {
        this.header.classList.add("sticky");
        this.resForm.classList.add("sticky");
      } else if (this.header.classList.contains('sticky')) {
        this.header.classList.remove("sticky");
        this.resForm.classList.remove("sticky");
      }
    }
  }

  render() {
    window.addEventListener("scroll", () => this.stickyHeader() )
    if (!this.props.restaurant) return null; 
    
    const { restaurant, reviews } = this.props;
    const reviewCount = Object.keys(reviews).length;
    // debugger
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
                    rating={restaurant.overall_ratings}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="orange"
                  />
                  <span>{restaurant.overall_ratings.toFixed(1)}</span>
                </section>
                <section id="total-reviews">
                  <FontAwesomeIcon
                    icon={["far", "comment-alt"]}
                    className="stats-icon"
                  />
                  <span>{reviewCount} Reviews</span>
                </section>
                <section id="price-range">
                  <FontAwesomeIcon
                    icon={["far", "money-bill-alt"]}
                    className="cash-icon"
                  />
                  <span>{getPrice(restaurant.price_range)}</span>
                </section>
                <section id="cuisines-type">
                  <FontAwesomeIcon icon="utensils" className="cuisines-icon" />
                  <span>{restaurant.cuisines}</span>
                </section>
              </div>
              <div id="restaurant-overview">
                {restaurant.description}
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
              <section>
                <ReviewsIndex reviews={reviews} />
              </section>
            </div>
          </main>
          <aside className="right-content">
            <div>
              <ReservationForm restaurant={restaurant} />
            </div>
            <div className="right-details">

            </div>
          </aside>
          
        </section>
      </section>
    );
  }
}

export default RestaurantShow;
