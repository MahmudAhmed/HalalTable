import { connect } from "react-redux";
import { createReservation } from "../../actions/reservations_action";
import CreateReservation from "./create_reservation";


const mSTP = ({ session }) => ({
  currentUserId: session.id
});


const mDTP = dispatch => {
  return {
    createReservation: (...args) => dispatch(createReservation(...args)),
  }
};

export default connect(mSTP, mDTP)(CreateReservation);

