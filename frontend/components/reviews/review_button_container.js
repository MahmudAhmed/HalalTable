import { connect } from "react-redux";
import ReviewButton from "./review_button";

const mSTP = ({ session }) => {
  return {
    loggedIn: Boolean(session.id),
  }
};


export default connect(mSTP, null)(ReviewButton);
