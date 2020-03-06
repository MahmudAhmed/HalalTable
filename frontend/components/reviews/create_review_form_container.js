import { connect } from "react-redux";
import { createReview } from "../../actions/reviews_action";
import ReviewForm from "./review_form";
import { withRouter } from "react-router-dom";

const mSTP = ({errors}, ownProps) => {
  return {
    restaurantId: ownProps.match.params.restaurantId,
    errors: errors.reviews,
    review: { overall: 5, food: 5, service: 5, ambience: 5, body: "" }
  }
};

const mDTP = (dispatch) => ({
  formAction: (formData, restaurantId) => dispatch(createReview(formData, restaurantId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewForm));

