import { connect } from "react-redux";
import { createReservation } from "../../actions/reservations_action";
import CreateReservation from "./create_reservation";
import { withRouter } from "react-router-dom";


const mSTP = ({ session, entities }) => {
  debugger
  return {
  currentUserId: session.id,
  reservationId: Object.values(entities.reservations)[0]
}};


const mDTP = (dispatch, ownProps) => {
  return {
    createReservation: (formData, currentUserId) => {
      // debugger
      dispatch(createReservation(formData, currentUserId))
      // .then((res) => { 
      //   debugger
      //   // ownProps.history.push(`/reservations/${ownProps.reservationId}`);
      // })
    },
  }
};
export default withRouter(connect(mSTP, mDTP)(CreateReservation));

