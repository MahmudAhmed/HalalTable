import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect, withRouter } from "react-router-dom";

class CreateReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {special_request: ""}
    this.handleChange = this.handleChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick(e) {
    e.preventDefault();
    const { createReservation, currentUserId, history, reservationId } = this.props;
    const { partySize, date, time, restaurantId } = this.props.location.state;

    const formData = { party_size: partySize, date: date, time: time, restaurant_id: restaurantId, special_request: this.state.special_request}
    this.props.createReservation(formData, currentUserId)
  }

  handleChange(e){
    this.setState({special_request: e.target.value})
  }

  render() {
    if (this.props.reservationId){
      this.props.history.push(`/reservations/${this.props.reservationId}`)
    }
    if (!this.props.location.state) return <Redirect to={`/restaurants/1`} />
    const { partySize, date, time, restaurantName, mainPhoto } = this.props.location.state;
    return (
      <div className="reservation-page-container">
        <div className="reservation-form-container">
          <h3>You're almost done!</h3>
          <div className="reservation-details-container">
            <div className="restaurant-image-container">
              <img className="restaurant-image" src={mainPhoto} />
            </div>
            <div className="reservation-details">
              <h4>{restaurantName}</h4>
              <div className="reservation-subheader">
                <div className="reservation-date">
                  <span><FontAwesomeIcon
                    icon={["far", "calendar"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>{date}</p>
                </div>
                <div className="reservation-confirm-time">
                  <span><FontAwesomeIcon
                    icon={["far", "clock"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>{time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                </div>
                <div className="reservation-party-size">
                  <span><FontAwesomeIcon
                    icon={["far", "user"]}
                    color="black"
                    className="subheader-icon"
                  /></span>
                  <p>{partySize}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <input type="text" className="input reservation-optional-input" placeholder="Add a special request (optional)" onChange={this.handleChange} />
          </div>
          <div className="reservation-button">
            <button className="btn" onClick={this.handleBtnClick}>Complete reservation</button>
          </div>
          <span className="privacy-policy">By clicking “Complete reservation” you agree to the <strong>HalalTable Terms of Use</strong> and <strong>Privacy Policy</strong>. Standard text message rates may apply. You may opt out of receiving text messages at any time.</span>
        </div>

      </div>
    );
  }
}

export default withRouter(CreateReservation);
