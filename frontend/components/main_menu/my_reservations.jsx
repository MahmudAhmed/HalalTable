import React from "react";
import ReservationIndexItem from "./reservation_index_items";

class MyReservations extends React.Component {
  componentDidMount(){
    const {requestReservations, userId} = this.props;
    requestReservations(userId)
  }

  componentDidUpdate(prevProps){
    if (Object.values(prevProps.reservations).length !== Object.values(this.props.reservations).length){
      const { requestReservations, userId } = this.props;
      requestReservations(userId)
    }
  }

  render() {
    const { reservations, updateReservation, userId } = this.props;
    const upcoming = reservations.filter(reservation => reservation.status === "upcoming")
    const cancelled = reservations.filter(reservation => reservation.status === "cancelled")
    return (
      <div className="reservation-index-container">
        <section className="reservation-upcoming-container">
          <h1 className="reservation-title">Upcoming</h1>
          <div className="reservation-index-item">
            {upcoming.map(reservation => <ReservationIndexItem key={reservation.id} reservation={reservation} updateReservation={updateReservation} userId={userId}/>)}
          </div>
        </section>

        <section className="reservation-cancelled-container">
          <h1 className="reservation-title">Cancelled</h1>
          <div className="reservation-index-item">
            {cancelled.map(reservation => <ReservationIndexItem key={reservation.id} reservation={reservation} />)}
          </div>
        </section>
      </div>
    )
  }
}

export default MyReservations;
