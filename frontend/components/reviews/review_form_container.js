import { connect } from "react-redux";
import { createReview } from "../../actions/reviews_action";
import ReviewForm from "./review_form";
import { withRouter } from "react-router-dom";




const mSTP = ({errors}, ownProps) => {
  // debugger
  return {
    restaurantId: ownProps.match.params.restaurantId,
    errors: errors.reviews,
  }
};


const mDTP = (dispatch) => ({
  createReview: (formData, restaurantId) => dispatch(createReview(formData, restaurantId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewForm));

