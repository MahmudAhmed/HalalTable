import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoGallery from "./photo_gallery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import StarRatings from "react-star-ratings";
import ReservationForm from "../reservations/reservation_index";
import Details from "./details";
import MenuItems from "./menu";
import ReviewsIndexContainer from "../reviews/review_index_container";
import RestaurantMap from "../map/restaurant_map";

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      isFave: props.favorites.find(fave => fave.restaurant_id === props.restaurant.id),
      partySize: 1,
      date: min,
      time: new Date(),
      slots: []
    };
    this.stickyHeader = this.stickyHeader.bind(this)
    this.handleFavClick = this.handleFavClick.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
  }
   
  componentDidMount() {
    this.props.requestRestaurant(this.props.match.params.restaurantId)
    if (this.props.userId) { 
      this.props.requestFavorites(this.props.userId)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurant !== this.props.restaurant) {
      this.restaurantHours = getRestaurantHours(this.props.restaurant.open_time, this.props.restaurant.close_time);
      this.setState({ 
        time: this.restaurantHours[0],
        slots: [this.restaurantHours[0], this.restaurantHours[1], this.restaurantHours[2]]})
    }
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
    if (this.state.isFave){
      deleteFavorite(userId, this.state.isFave.id)
      this.setState({isFave: null}) 
    } else{
      createFavorite({restaurant_id: restaurant.id}, userId)
      this.setState({ isFave: { restaurant_id: restaurant.id } }) 
    }
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: (field === "time" ? new Date(e.target.value) : e.target.value) })
    }
  }

  handleBtnClick(e) {
    e.preventDefault();
    let idx;
    this.availableTime = [];
    this.timeSlots.forEach((time, i) => {
      if (time.getTime() === new Date(this.state.time).getTime()) {
        idx = i;
      }
    })
    if (idx === 0) {
      this.availableTime[0] = this.timeSlots[idx]
      this.availableTime[1] = this.timeSlots[idx + 1]
      this.availableTime[2] = this.timeSlots[idx + 2]
    } else if (idx === this.timeSlots.length - 1) {
      this.availableTime[0] = this.timeSlots[idx - 2]
      this.availableTime[1] = this.timeSlots[idx - 1]
      this.availableTime[2] = this.timeSlots[idx]
    } else {
      this.availableTime[0] = this.timeSlots[idx - 1]
      this.availableTime[1] = this.timeSlots[idx]
      this.availableTime[2] = this.timeSlots[idx + 1]
    }
    this.setState({
      slots: [...this.availableTime]
    })
    document.querySelector(".show-page-time-slots").classList.add("is-open")
  }

  handleTimeClick(time) {
    const that = this
    return e => {
      if (that.props.loggedIn) {
        that.props.history.push({ pathname: "/reservations/create/new", state: { partySize: this.state.partySize, date: this.state.date, time: time, restaurantId: this.props.restaurant.id, restaurantName: this.props.restaurant.name, mainPhoto: this.props.restaurant.mainPhoto } })
      } else {
        document.querySelector(".modal-login").classList.add("is-open");
      }
    }
  }

  render() {
    window.addEventListener("scroll", () => this.stickyHeader() )
    if (!this.props.restaurant) return null; 
    const { restaurant, reviews, menu, loggedIn } = this.props;
    const reviewCount = Object.keys(reviews).length;
    const partySize = Array(20).fill().map((_, i) => <option key={i + 1} id="select-option" value={`${i + 1}`}>{i + 1}</option>);
    this.timeSlots;
    if (Object.values(this.props.restaurant).length >= 1) {
      this.timeSlots = getRestaurantHours(this.props.restaurant.open_time, this.props.restaurant.close_time)
    } else {
      this.timeSlots = [];
    }
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
            <section className="show-page-container">
              <section className="left-content-container">
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

                    <section className="show-page-reserve">
                      <h3
                        className="reservation-form-title"
                      >
                        Make Your Reservation
                    </h3>
                      <div className="reservation-inputs">
                        <div className="reservation-form-party-size">
                          <span className="reservation-labels">Party Size</span>
                          <div className="select-party-size">
                            <select
                              className="reservation-size"
                              value={this.state.partySize}
                              onChange={this.handleChange("partySize")}
                            >
                              {partySize}
                            </select>
                          </div>
                        </div>
                        <section className="date-time-reservation">
                          <div className="choose-date">
                            <span className="reservation-labels">Date</span>
                            <div id="reservation-date">
                              <input
                                type="date"
                                className="show-res-input"
                                min={min}
                                value={this.state.date}
                                onChange={this.handleChange("date")}
                              />
                            </div>
                          </div>
                          <div className="choose-time">
                            <span className="reservation-labels">Time</span>
                            <select
                              className="reservation-time"
                              onChange={this.handleChange("time")}
                            >
                              {this.timeSlots.map((time, i) => (
                              <option key={i} id="select-option" value={time}>
                                {time.toLocaleString("en-US", {
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true
                                })}
                              </option>
                            ))}
                            </select>
                          </div>
                        </section>
                      <section className="available-display-slots show-page-time-slots">
                          <h2>Select a time:</h2>
                          <ul className="time-slots">
                            {
                              this.state.slots.map((time, idx) =>
                                <li key={idx}
                                  className="time-slot-btn"
                                  onClick={this.handleTimeClick(time)}>
                                  {time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                                </li>)
                            }
                          </ul>
                        </section>
                        <div id="reserve-btn">
                          <button className="btn" onClick={this.handleBtnClick}>
                            Find a Table
                        </button>
                        </div>
                      </div>
                    </section>


                    <div id="restaurant-overview">
                      {restaurant.description}
                    </div>
                    <Details restaurant={restaurant} />
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
              </section>
              <section className="right-content-container">
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
        </section>
      </section>
    );
  }
}

export default RestaurantShow;


const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay)
  .toISOString()
  .slice(0, 10);

const getRestaurantHours = (open, close) => {
  if (!open) return [];
  const openTime = new Date(open);
  let utcOpenTime = new Date(openTime.getTime() + openTime.getTimezoneOffset() * 60000);
  const closeTime = new Date(close);
  let utcCloseTime = new Date(closeTime.getTime() + closeTime.getTimezoneOffset() * 60000);
  if (openTime > closeTime) utcCloseTime.setDate(utcCloseTime.getDate() + 1);
  const restaurantHours = [];
  while (true) {
    if (utcOpenTime.getTime() > utcCloseTime.getTime()) break;
    restaurantHours.push(new Date(utcOpenTime.getTime()));
    utcOpenTime.setHours(utcOpenTime.getHours() + 1);
  };
  return restaurantHours
}


const getPrice = (price_range) => {
  if (price_range === "$$") {
    return "$30 and under"
  } else if (price_range === "$$$") {
    return "$31 to $50"
  } else if (price_range === "$$$$") {
    return "$50 and over"
  }
}