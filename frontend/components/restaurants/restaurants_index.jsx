import React from "react";
import RestaurantIndexItems from "./restaurant_index_items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Route } from "react-router-dom";



class RestaurantsIndex extends React.Component {
  // constructor(props){

  // }
  componentDidMount(){
    this.props.requestRestaurants();
  }

  render() {
    // debugger
    // const { restaurants } = this.props;
    // const display = restaurants.map( restaurant => (
    //   <RestaurantIndexItems 
    //   key={restaurant.id}
    //   restaurant={restaurant} 
    //   />)
    // ) 
    return (
      <>
        <div className="splash-form-container">
          <section className="splash-form">
            <h1 className="splash-form-title">
              Find your table for any occasion
            </h1>
            <form>
              <section>
                <div className="splash-date-time-size">
                  <div className="splash-date">
                    <FontAwesomeIcon
                      icon={["far", "calendar"]}
                      color="black"
                      className="splash-calendar-icon"
                    />
                    <input type="date" />
                  </div>

                  <div className="splash-time">
                    <FontAwesomeIcon
                      icon={["far", "clock"]}
                      color="black"
                      className="splash-clock-icon"
                    />
                    <select>
                      {" "}
                      <option selected>10:00 am</option>
                      <option>Time</option>
                    </select>
                  </div>

                  <div className="splash-size">
                    <FontAwesomeIcon
                      icon={["far", "user"]}
                      color="black"
                      className="splash-party-icon"
                    />
                    <select id="splash-size">
                      {" "}
                      <option selected>1</option>
                      <option>Size</option>
                    </select>
                  </div>
                </div>
              </section>
              <div className="splash-location-container">
                <select className="splash-location-select">
                  <option>NYC/Manhattan</option>
                  <option>Brooklyn</option>
                  <option>Queens</option>
                  <option>Bronx</option>
                  <option>Staten Island</option>
                  <option>Long Island</option>
                </select>
              </div>
              <button className="btn" id="splash-btn">
                Let's go
              </button>
            </form>

            {/* <div className="splash-inputs"> 

                  <div className="choose-date">
                    <span className="reservation-labels">Date</span>
                    <div id="reservation-date">
                      <input
                        type="date"
                        className="show-res-input"
                      />
                    </div>
                  </div> */}
            {/* <div className="choose-time">
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
                
                <section className="available-time-slots show-page-time-slots">
                  <h2>Select a time:</h2>
                  <ul className="time-slots">
                    {this.state.slots.map((time, idx) => (
                      <li
                        key={idx}
                        onClick={this.handleUpdateClick(time)}
                        className="time-slot-btn"
                      >
                        {time.toLocaleString("en-US", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true
                        })}
                      </li>
                    ))}
                      </ul>*/}

            {/* <div id="reserve-btn">
                  <button className="btn" onClick={this.handleBtnClick}>
                    Find a Table
                  </button>
                </div>
              </div> */}
          </section>
        </div>
        {/* <nav className="filter-search-bar"></nav>
        <div className="index-page">
          <div className="filter-bar"></div>
          <div className="restaurants-index">
            <div className="top-index-section">
              <div className="top-index-border"></div>
              <span className="top-index-text">100% Zabihah Halal</span>
              <FontAwesomeIcon icon="hamburger" className="top-index-icon" />
            </div>
            <ul>{display}</ul>
          </div>
        </div> */}
      </>
    );
  }

}

export default RestaurantsIndex;