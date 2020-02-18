import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReservationShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="reservation-show-outside-container">
        <div className="reservation-show-container">
          <div className="reservation-confirm-header">
            <span><FontAwesomeIcon
              icon="calendar-check"
              color="black"
              className="res-header-icon"
            /></span>
            <div className="reservation-show-header-text">
              <h3>Thanks! Your reservation is confirmed.</h3>
              <p>Confirmation #10203</p>
            </div>
          </div>
          <div className="reservation-details-container">
            <div className="restaurant-image-container" id="reservation-show-image">
              <img className="restaurant-image" src="//images.otstatic.com/prod/25772382/1/small.jpg" />
            </div>
            <div className="reservation-details">
              <h4>Brooklyn Cider House</h4>
              <div className="reservation-subheader">
                <div className="reservation-date">
                  <span><FontAwesomeIcon
                    icon={["far", "calendar"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>Tue, Feb 18</p>
                </div>
                <div className="reservation-confirm-time">
                  <span><FontAwesomeIcon
                    icon={["far", "clock"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>6:45 pm</p>
                </div>
                <div className="reservation-party-size">
                  <span><FontAwesomeIcon
                    icon={["far", "user"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>2 people</p>
                </div>
              </div>
            </div>
          </div>
          <div id="special-request">
            <span>No Special Request</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationShow;
