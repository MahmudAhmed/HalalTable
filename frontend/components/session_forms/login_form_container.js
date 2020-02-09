import { connect } from "react-redux";
import LoginSessionForm from "./login_session_form";
import { login } from "../../actions/session_action";

const mapStateToProps = ({ entities, errors, session }) => ({
  errors: errors.session,
  loggedIn: Boolean(entities.users[session.id])
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
