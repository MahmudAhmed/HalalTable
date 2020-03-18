import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoGallery from "./photo_gallery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StarRatings from "react-star-ratings";
import ReservationForm from "../reservations/reservation_index";

import MenuItems from "./menu";
import ReviewsIndexContainer from "../reviews/review_index_container";
import RestaurantMap from "../map/restaurant_map";

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
    this.handleFavClick = this.handleFavClick.bind(this)
    this.state = { isFave: props.favorites.find(fave => fave.restaurant_id === props.restaurant.id)}
  }
   
  componentDidMount() {
  
    this.props.requestRestaurant(this.props.match.params.restaurantId);
    if (this.props.userId) { 
      this.props.requestFavorites(this.props.userId)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.restaurantId !== prevProps.match.params.restaurantId) {
      const id = this.props.match.params.restaurantId
      this.props.requestRestaurant(id);
    }  
    this.header = document.getElementById("nav-list");
    this.resForm = document.getElementById("reservation-forms");
    if (this.header) {
      this.sticky = this.header.offsetTop
    }  
    if (this.props.favorites !== prevProps.favorites ) {
      this.setState({ isFave: this.props.favorites.find(fave => fave.restaurant_id === parseInt(prevProps.match.params.restaurantId)) })
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

  handleFavClick(e){
    e.preventDefault();
    
    const { loggedIn, createFavorite, deleteFavorite, favorites, restaurant, userId } = this.props;
    if (!loggedIn){
      document.querySelector(".modal-login").classList.add("is-open");
      return
    }
    // this.setState({ isFave: favorites.find( fave => fave.restaurant_id === restaurant.id ) });
    if (this.state.isFave){
      deleteFavorite(userId, this.state.isFave.id)
      this.setState({isFave: null}) 
    } else{
      createFavorite({restaurant_id: restaurant.id}, userId)
      this.setState({ isFave: { restaurant_id: restaurant.id } }) 
    }
  }

  render() {
    window.addEventListener("scroll", () => this.stickyHeader() )
    if (!this.props.restaurant) return null; 
    const { restaurant, reviews, menu, loggedIn } = this.props;
    const reviewCount = Object.keys(reviews).length;
    return (
      <section className="show-page">
        <div id="show-page-splash">
          <div id="favorite-button" className={this.state.isFave ? "is-fave" : ""}>
            <button className="splash-favorite-button" onClick={this.handleFavClick}>
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
                <PhotoGallery photos={restaurant.photoUrl}/>
              </div>
              <div id="menu-div">
                <h2 className="display-subheader" id="menu-section">
                  Menu
                </h2>
                <ul>
                  {Object.values(menu.menu_items).map( (item, idx) => <MenuItems key={idx} item={item}/>)}
                </ul>
              </div>
              <section>
                <ReviewsIndexContainer reviews={reviews} restaurant={restaurant} />
              </section>
            </div>
          </main>
          <aside className="right-content">
            <div>
              <ReservationForm restaurant={restaurant} loggedIn={loggedIn} />
            </div>
              <div id="sidebar-map">
                <RestaurantMap restaurant={restaurant}/>
              </div>
            <div className="restaurant-right-details">
              <section>
                <FontAwesomeIcon
                  icon={["far", "building"]}
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Neighborhood</h4>
                  <p>Edgewater</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon={["far", "clock"]}
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Hours of operation</h4>
                  <p>Mon-Sun</p>
                  <p>7:00 am - 11:00 pm</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="utensils"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Cuisines</h4>
                  <p>Steak</p> 
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="sign-language"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Dining style</h4>
                  <p>Fine Dining</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="tshirt"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Dress code</h4>
                  <p>Business Casual</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="subway"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Public transit</h4>
                  <p>Public transportation within one block.</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon={["far", "credit-card"]}
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Payment options</h4>
                  <p>AMEX, Discover, MasterCard, Visa</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="external-link-alt"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Website</h4>
                  <p>url</p>
                </div>
              </section>
              <section>
                <FontAwesomeIcon
                  icon="phone-alt"
                  className="right-side-details-icon"
                />
                <div>
                  <h4 className="right-side-header">Phone number</h4>
                  <p>(201) 313-9463</p>
                </div>
              </section>
            </div>
          </aside>         
        </section>
      </section>
    );
  }
}

export default RestaurantShow;
