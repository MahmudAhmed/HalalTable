import React from "react";
import { withRouter } from "react-router-dom";

const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay)
  .toISOString()
  .slice(0, 10);

const getRestaurantHours = (open, close) => {
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


class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.restaurantHours = getRestaurantHours(props.restaurant.open_time, props.restaurant.close_time);
    this.state = {
      partySize: 1,
      date: min,
      time: this.restaurantHours[0],
      slots: [this.restaurantHours[0], this.restaurantHours[1], this.restaurantHours[2]]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleTimeClick = this.handleTimeClick.bind(this);
    this.availableTime = [];
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: (field === "time" ? new Date(e.target.value) : e.target.value) });
    }
  }

  handleBtnClick(e) {
    e.preventDefault();

    let idx;
    this.restaurantHours.forEach((time, i) => {
      if (time.getTime() === this.state.time.getTime()) {
        idx = i;
      }
    })
    if (idx === 0) {
      this.availableTime[0] = this.restaurantHours[idx]
      this.availableTime[1] = this.restaurantHours[idx + 1]
      this.availableTime[2] = this.restaurantHours[idx + 2]
    } else if (idx === this.restaurantHours.length - 1) {
      this.availableTime[0] = this.restaurantHours[idx - 2]
      this.availableTime[1] = this.restaurantHours[idx - 1]
      this.availableTime[2] = this.restaurantHours[idx]
    } else {
      this.availableTime[0] = this.restaurantHours[idx - 1]
      this.availableTime[1] = this.restaurantHours[idx]
      this.availableTime[2] = this.restaurantHours[idx + 1]
    }
    this.setState({
      slots: [...this.availableTime]
    })
    debugger
    document.querySelector(".available-time-slots").classList.add("is-open")
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
    const partySize = Array(20).fill().map((_, i) => <option key={i + 1} id="select-option" value={`${i + 1}`}>{i + 1}</option>);
    debugger
    const timeSlots = this.restaurantHours.map((time, i) => <option key={i} id="select-option" value={time}>{time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</option>)
    return (
      <div id="reservation-forms">
        <h3 className="reservation-form-title">Make a reservation</h3>
        <div className="reservation-inputs">
          <div className="reservation-form-party-size">
            <span className="reservation-labels">Party Size</span>
            <div className="select-party-size">
              <select className="reservation-size" onChange={this.handleChange("partySize")}>{partySize}</select>
            </div>
          </div>
          <section className="date-time-reservation">
            <div className="choose-date">
              <span className="reservation-labels">Date</span>
              <div id="reservation-date">
                <input
                  type="date"
                  min={min}
                  value={this.state.date}
                  onChange={this.handleChange("date")}
                />
              </div>
            </div>
            <div className="choose-time">
              <span className="reservation-labels">Time</span>
              <select className="reservation-time" onChange={this.handleChange("time")}>{timeSlots}</select>
            </div>
          </section>
          <section className="available-time-slots">
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
        </div>
        <div id="reserve-btn">
          <button className="btn" onClick={this.handleBtnClick}>Find a Table</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ReservationForm);
