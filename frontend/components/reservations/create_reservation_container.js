import { connect } from "react-redux";
import { createReservation } from "../../actions/reservations_action";
import CreateReservation from "./create_reservation";
import { withRouter } from "react-router-dom";

const mSTP = ({ session, entities }) => {
  return {
  currentUserId: session.id,
  reservationId: Object.keys(entities.reservations)[0]
}};

const mDTP = (dispatch, ownProps) => {
  return {
    createReservation: (formData, currentUserId) => {
      dispatch(createReservation(formData, currentUserId))
    },
  }
};

export default withRouter(connect(mSTP, mDTP)(CreateReservation));

