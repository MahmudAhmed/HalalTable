import React from "react";
import { Link, withRouter } from "react-router-dom";

class ReservationIndexItem extends React.Component{

  
  render() {
    const { reservation, updateReservation, userId } = this.props;
    const display = reservation.status === "upcoming" ? (
      <section className="modify-reservation-btns" id="reservation-item-buttons">
        <button><Link to={`/reservations/${reservation.id}`}>Modify</Link></button>
        <button onClick={() => updateReservation({status: "cancelled"}, userId, reservation.id)}>Cancel</button>
      </section>
    ) : ""
    return (
      <div className="restaurant-index-item">
        <div className="index-image" id="reservation-item-pic">
          <Link to={`/restaurants/${reservation.restaurant_id}`} target="_blank">
            <img src={reservation.photoUrl} />
          </Link>
        </div>
        <div className="restaurant-details">
          <h1 id="reservation-item-title">
            <Link to={`/restaurants/${reservation.restaurant_id}`} target="_blank">
              {reservation.restaurant_name}
            </Link>
          </h1>
          <div className="reservation-item-details">
            <div className="reservation-date-time">
              <span>{reservation.date}</span>
              <span> at {new Date(reservation.time).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true
              })}</span>
            </div>
            <div className="reservation-party-size">
              <span>Table for </span>
              <span>{reservation.party_size}</span>
              <span>{reservation.party_size > 1 ? " people" : " person"}</span>
            </div>
          </div>
          {display}
        </div>
      </div> 
    )
  }
}

export default withRouter(ReservationIndexItem);
