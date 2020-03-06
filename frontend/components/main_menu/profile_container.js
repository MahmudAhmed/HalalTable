import { connect } from "react-redux";
import Profile from "./profile";

const mSTP = ({ entities, session }) => {
  return {
    user: entities.users[session.id]
  }
};

export default connect(mSTP, null)(Profile);

