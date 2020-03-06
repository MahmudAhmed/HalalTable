import { connect } from "react-redux";
import MyReservations from "./my_reservations";
import { requestReservations, updateReservation } from "../../actions/reservations_action";

const mSTP = ({ entities, session }) => {
  return {
    userId: session.id,
    reservations: Object.values(entities.reservations) || []
  }
};

const mDTP = (dispatch) => {
  return {
    requestReservations: (userId) => dispatch(requestReservations(userId)),
    updateReservation: (formData, userId, reservationId) => {
      dispatch(updateReservation(formData, userId, reservationId))
    }
  }
};

export default connect(mSTP, mDTP)(MyReservations);

