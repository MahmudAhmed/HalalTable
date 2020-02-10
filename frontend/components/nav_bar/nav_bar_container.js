import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout, login } from "../../actions/session_action";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
