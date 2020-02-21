import { connect } from "react-redux";
import Profile from "./profile";





const mSTP = ({ entities, session }) => {
  return {
    user: entities.users[session.id]
  }
};


const mDTP = (dispatch) => ({
  // formAction: (formData, restaurantId) => dispatch(createReview(formData, restaurantId)),
});

export default connect(mSTP, null)(Profile);

