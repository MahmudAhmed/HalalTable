import { connect } from "react-redux";
import ReservationForm from "./reservation_index";
import { createReservation } from "../../actions/reservations_action";


const mSTP = ({ session }) => ({
  currentUserId: session.id
});


const mDTP = dispatch => ({
  createReservation: (...args) => dispatch(createReservation(...args)),
});

export default connect(mSTP, mDTP)(ReservationForm);

