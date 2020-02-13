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
    let openTime = new Date(restaurant.open_time);
    let closeTime = new Date(restaurant.close_time);
    const restaurantHours = [];
    debugger
    while (true){
      if (openTime.getTime() === closeTime.getTime()) break;
      // 
      restaurantHours.push(new Date(openTime.getTime()));
      openTime.setHours(openTime.getHours() + 1);
    };

    debugger
    const partySize = Array(20).fill().map((_, i) => <option key={i+1} value={`${i+1}`}>{i+1}</option>);
    const timeSlots = restaurantHours.map((time, i) => <option key={i} value={time}>{time.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })}</option>)
    return (
      <aside className="reservation-forms">
        <h3 className="reservation-form-title">Make a reservation</h3>
        <div className="reservation-form-party-size">
          <span>Party Size</span>
          <select>{partySize}</select>
        </div>
        <div>
          <input
            type="date"
            min={min}
            value={this.state.date}
            onChange={this.handleChange("date")}
          ></input>
        </div>
        <div>
          <select>{timeSlots}</select>
        </div>
      </aside>
    );
  }
}

export default ReservationForm;
