import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_action";
import ReservationShow from "./show_reservation";
import { requestReservation } from "../../actions/reservations_action";


const mSTP = ({session, entities}, ownProps) => {
  // const test = entities.restaurants[entities.reservations[ownProps.match.params.reservationId].restaurant_id]
  debugger
  return {
  currentUserId: session.id,
  reservation: entities.reservations[ownProps.match.params.reservationId],
  restaurant: Object.values(entities.restaurants).length >= 1 ? entities.restaurants[entities.reservations[ownProps.match.params.reservationId].restaurant_id] : {}
}};


const mDTP = dispatch => {
  debugger
  return {
    requestRestaurant: restaurantId => {
      debugger
      dispatch(requestRestaurant(restaurantId))
    },
    requestReservation: (userId, reservationId) => {
      debugger
      dispatch(requestReservation(userId, reservationId))
    }
  }
};

export default connect(mSTP, mDTP)(ReservationShow);

