import { connect } from "react-redux";
import SignUpSessionForm from "./signup_session_form";
import { signup } from "../../actions/session_action";

const mapStateToProps = ({ entities, errors, session }) => ({
  errors: errors.session,
  loggedIn: Boolean(entities.users[session.id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSessionForm);
