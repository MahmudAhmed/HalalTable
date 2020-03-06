import { connect } from "react-redux";
import { requestRestaurant } from "../../actions/restaurant_action";
import ShowReservation from "./show_reservation";
import { requestReservation, updateReservation } from "../../actions/reservations_action";

const mSTP = ({session, entities}, ownProps) => {
  return {
  currentUserId: session.id,
  reservation: entities.reservations[ownProps.match.params.reservationId],
  restaurant: Object.values(entities.restaurants).length >= 1 ? entities.restaurants[entities.reservations[ownProps.match.params.reservationId].restaurant_id] : {}
}};

const mDTP = dispatch => {
  return {
    requestRestaurant: restaurantId => {
      dispatch(requestRestaurant(restaurantId))
    },
    requestReservation: (userId, reservationId) => {
      dispatch(requestReservation(userId, reservationId))
    },
    updateReservation: (formData, userId, reservationId) => {
      dispatch(updateReservation(formData, userId, reservationId))
    }

  }
};

export default connect(mSTP, mDTP)(ShowReservation);

