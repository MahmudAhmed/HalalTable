import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRatings from "react-star-ratings";
import PhotoGallery from "./photo_gallery";
import ReviewsIndex from "./reviews_index";

class RestaurantShow extends React.Component {
  
  constructor(props){
    super(props);
    // debugger
    this.header = $(".nav-list")

    this.sticky = this.header.offsetTop;
    this.stickyHeader = this.stickyHeader.bind(this)
    
  }
  
  
  componentDidMount() {
    // debugger
    
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }
  
  
  stickyHeader(e) {
    if (window.pageYOffset > this.sticky) {
      // $(".nav-list")[0].classList.add("sticky");
      $(".nav-list").addClass("sticky");
      debugger
    } else {
      // $(".nav-list")[0].removeClass("sticky");
      debugger
      $(".nav-list").removeClass("sticky");

    }
    // this.header.addClass('sticky')
  }

  render() {
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
            <ul className="nav-list" >
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
                  <h2 className="display-subheader">Photos</h2>
                  <PhotoGallery />
                </div>
                <div id="show-review">
                <h2 className="display-subheader">What 175 People Are Saying</h2>
                <section className="overall-review-container">
                  <section className="overall-review-left">
                    <p>
                      Overall ratings and reviews
                    </p>
                    <p> 
                      Your trust is our top concern, so businesses can't pay to alter or remove their reviews. 
                    </p>

                    <div>
                      <StarRatings
                        rating={4.403}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="orange"
                      />
                      <span>4.4 based on recent ratings</span>
                    </div>
                    
                    <ul className="ratings-breakdown">
                      <li>
                        <span>4.1</span>
                        <p>Food</p>
                      </li>
                      <li>
                        <span>4.3</span>
                        <p>Service</p>
                      </li>
                      <li>
                        <span>4.2</span>
                        <p>Ambience</p>
                      </li>
                      <li>
                        <span>3.9</span>
                        <p>Value</p>
                      </li>
                    </ul>
                  </section>
                  <section className="overall-review-right">
                    <ul className="review-bars">
                      <li id="bar"> 
                        <span className="bar-label">5</span>
                        <div className="back-bar" title="100 reviews">
                          <div className="bar-percentage"
                            style={{
                              width: "50%"
                            }}
                            
                          ></div>
                        </div>
                      </li>
                      <li id="bar">
                        <span className="bar-label">4</span>
                        <div className="back-bar" title="65 reviews">
                          <div className="bar-percentage"
                            style={{
                              width: "25%"
                            }}
                          ></div>
                        </div>
                      </li>
                      <li id="bar">
                        <span className="bar-label">3</span>
                        <div className="back-bar" title="40 reviews">
                          <div className="bar-percentage"
                            style={{
                              width: "10%"
                            }}
                          ></div>
                        </div>
                      </li>
                      <li id="bar">
                        <span className="bar-label">2</span>
                        <div className="back-bar" title="20 reviews">
                          <div className="bar-percentage"
                            style={{
                              width: "5%"
                            }}
                          ></div>
                        </div>
                      </li>
                      <li id="bar">
                        <span className="bar-label">1</span>
                        <div className="back-bar" title="10 reviews">
                          <div className="bar-percentage"
                            style={{
                              width: "1%"
                            }}
                          ></div>
                        </div>
                      </li>

                    </ul>


                  </section>
                </section>
                <div>
                  <ReviewsIndex />
                  <ReviewsIndex />
                  <ReviewsIndex />
                  <ReviewsIndex />
                  <ReviewsIndex />
                  <ReviewsIndex />

                </div>



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
