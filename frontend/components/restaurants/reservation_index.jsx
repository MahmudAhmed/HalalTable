import React from "react";


const now = new Date();
const currYear = now.getFullYear();
const currMonth = now.getMonth();
const currDay = now.getDate();
const min = new Date(currYear, currMonth, currDay)
.toISOString()
.slice(0, 10);

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { 
      partySize: 1, 
      date: min,
      time: ""  
    };
    // // this.time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // this.open_hour = "10:00 AM";
    // this.close_hour = "11:00 PM"

    
  }

  handleChange(field){
    // debugger
    return e => {
      debugger
      this.setState({[field]: e.target.value})
    }
  }
  



  render() {
    const { restaurant } = this.props;
    const openTime = new Date(restaurant.open_time);
    let utcOpenTime = new Date(openTime.getTime() + openTime.getTimezoneOffset() * 60000);
    const closeTime = new Date(restaurant.close_time);
    if (openTime > closeTime) closeTime.setDate(closeTime.getDate() + 1);
    let utcCloseTime = new Date(closeTime.getTime() + closeTime.getTimezoneOffset() * 60000);
    const restaurantHours = [];
    debugger
    while (true){

      if (utcOpenTime.getTime() > utcCloseTime.getTime()) break;
      restaurantHours.push(new Date(utcOpenTime.getTime()));
      utcOpenTime.setHours(utcOpenTime.getHours() + 1);
    };

    debugger
    const partySize = Array(20).fill().map((_, i) => <option key={i+1} id="select-option" value={`${i+1}`}>{i+1}</option>);
    const timeSlots = restaurantHours.map((time, i) => <option key={i} id="select-option" value={time}>{time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })}</option>)
    return (
      <div id="reservation-forms" className="sticky">
        <h3 className="reservation-form-title">Make a reservation</h3>

        <div className="reservation-inputs">  
          <div className="reservation-form-party-size">
            <span className="reservation-labels">Party Size</span>
            <div className="select-party-size">
              <select className="reservation-size">{partySize}</select>
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
              <select className="reservation-time">{timeSlots}</select>
            </div>

          </section>

        </div> 
        <div id="reserve-btn">
          <button className="btn">Find a Table</button>
        </div> 
      </div>
    );
  }
}

export default ReservationForm;
