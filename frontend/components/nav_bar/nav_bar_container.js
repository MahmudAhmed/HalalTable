import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout, login } from "../../actions/session_action";
import { requestReservations, requestReservation } from "../../actions/reservations_action";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  reservations: Object.values(entities.reservations) || []
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  requestReservations: (userId) => dispatch(requestReservations(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
