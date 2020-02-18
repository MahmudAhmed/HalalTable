import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Image from 'app/assets/images/middle_eastern.jpg';

class ReservationConfirmation extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="reservation-page-container">
        <div className="reservation-form-container">
          <h3>You're almost done!</h3>
          <div className="reservation-details-container">
            <div className="restaurant-image-container">
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
          <div>
            <input type="text" className="input reservation-optional-input" placeholder="Add a special request (optional)" />
          </div>
          <div className="reservation-button">
            <button className="btn">Complete reservation</button>
          </div>
          <span className="privacy-policy">By clicking “Complete reservation” you agree to the <strong>HalalTable Terms of Use</strong> and <strong>Privacy Policy</strong>. Standard text message rates may apply. You may opt out of receiving text messages at any time.</span>
        </div>
        <div className="right-container-reservation-page"> 
          <img src="https://image.flaticon.com/sprites/new_packs/2010744-cooking.png"/>
        </div>
      </div>
    );
  }
}

export default ReservationConfirmation;
