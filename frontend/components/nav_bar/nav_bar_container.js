import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_action";

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
