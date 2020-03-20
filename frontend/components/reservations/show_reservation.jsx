import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

class ShowReservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partySize: 1,
      date: "2021-01-01",
      time: new Date(),
      slots: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: (field === "time" ? new Date(e.target.value) : e.target.value) })
    }
  }

  componentDidMount() {
    const { requestReservation, currentUserId, match } = this.props;
    requestReservation(currentUserId, match.params.reservationId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reservation !== this.props.reservation) {
      const { reservation, requestRestaurant } = this.props;
      requestRestaurant(reservation.restaurant_id)
      this.setState({
        partySize: reservation.party_size,
        date: reservation.date,
        time: reservation.time
      })
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
    document.querySelector(".available-time-slots").classList.add("is-open")
  }

  handleModifyClick(e) {
    e.preventDefault();
    document.querySelector(".reserve-edit-form").classList.add("is-open")
    document.querySelector(".modify-reservation-btns").classList.add("is-closed")
  }

  handleUpdateClick(time) {
    return e => {
      e.preventDefault();
      const { updateReservation, currentUserId, reservation } = this.props;
      const { partySize, date, restaurantId } = this.state;

      const formData = { party_size: partySize, date: date, time: time, restaurant_id: restaurantId }
      updateReservation(formData, currentUserId, reservation.id)
      document.querySelector(".reserve-edit-form").classList.remove("is-open")
      document.querySelector(".modify-reservation-btns").classList.remove("is-closed")
    }
  }

  handleCancelClick(e){
    e.preventDefault();
    const { updateReservation, userId, reservation } = this.props;
    const formData = { status: "cancelled" }
    updateReservation(formData, userId, reservation.id)
  }


  render() {
    if (!this.props.reservation) return null;
    this.timeSlots;
    if (Object.values(this.props.restaurant).length >= 1) {
      this.timeSlots = getRestaurantHours(this.props.restaurant.open_time, this.props.restaurant.close_time)
    } else {
      this.timeSlots = [];
    }
    const partySize = Array(20).fill().map((_, i) => <option key={i + 1} id="select-option" value={`${i + 1}`}>{i + 1}</option>);
    const { restaurant, reservation } = this.props;
    const header = reservation.status === "upcoming" ? (
      <div className="reservation-confirm-header">
        <span><FontAwesomeIcon
          icon={["far", "calendar-check"]}
          color="black"
          className="res-header-icon"
        /></span>
        <div className="reservation-show-header-text">
          <h3>Thanks! Your reservation is confirmed.</h3>
          <p>Confirmation #10203</p>
        </div>
      </div> 
      ) : (
      <div className="reservation-cancelled-header">
        <span><FontAwesomeIcon
          icon={["far", "calendar-times"]}
          color="black"
          className="res-header-icon"
        /></span>
        <div className="reservation-show-header-text">
          <h3>This reservation has been cancelled.</h3>
          <p>Please contact the restaurant for further inquiry...</p>
        </div>
      </div> 
      );
    const modifyBtns = reservation.status === "upcoming" ? (
      <section className="modify-reservation-btns">
        <button onClick={this.handleModifyClick}>Modify</button>
        <button onClick={this.handleCancelClick}>Cancel</button>
      </section>
    ) : "";
    return (
      <div className="reservation-show-outside-container">
        <div className="reservation-show-container">
          {header}
          <div className="reservation-details-container">
            <div
              className="restaurant-image-container"
              id="reservation-show-image"
            >
              <img
                className="restaurant-image"
                src={reservation.photoUrl}
              />
            </div>
            <div className="reservation-details">
              <h4>{restaurant.name}</h4>
              <div className="reservation-subheader">
                <div className="reservation-date">
                  <span>
                    <FontAwesomeIcon
                      icon={["far", "calendar"]}
                      color="black"
                      className="subheader-icon"
                    />
                  </span>
                  <p>{reservation.date}</p>
                </div>
                <div className="reservation-confirm-time">
                  <span>
                    <FontAwesomeIcon
                      icon={["far", "clock"]}
                      color="black"
                      className="subheader-icon"
                    />
                  </span>
                  <p>
                    {new Date(reservation.time).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true
                    })}
                  </p>
                </div>
                <div className="reservation-party-size">
                  <span>
                    <FontAwesomeIcon
                      icon={["far", "user"]}
                      color="black"
                      className="subheader-icon"
                    />
                  </span>
                  <p>{reservation.party_size}</p>
                </div>
              </div>
            </div>
          </div>
          <div id="special-request">
            <span>{reservation.special_request}</span>
          </div>
          <section className="reservation-edit container">
            {modifyBtns}
            <section className="reserve-edit-form">
              <h3
                className="reservation-form-title"
                id="edit-reservation-title"
              >
                Change Your Reservation
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
                  </ul>
                </section>
                <div id="reserve-btn">
                  <button className="btn" onClick={this.handleBtnClick}>
                    Find a Table
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
        <div className="reservation-show-btns-container">
          {" "}
          <div className="reservation-show-btns">
            <button
              className="btn"
              onClick={() => this.props.history.push("/")}
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowReservation;
