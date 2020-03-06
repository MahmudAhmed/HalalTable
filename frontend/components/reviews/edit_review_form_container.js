import { connect } from "react-redux";
import { updateReview } from "../../actions/reviews_action";
import ReviewForm from "./review_form";
import { withRouter } from "react-router-dom";

const mSTP = ({ entities, errors }, ownProps) => {
  return {
    restaurantId: ownProps.match.params.restaurantId,
    errors: errors.reviews,
    review: entities.reviews[ownProps.match.params.id]
  }
};

const mDTP = (dispatch,ownProps) => {
  return {
    formAction: (formData, restaurantId) => dispatch(updateReview(formData, restaurantId, ownProps.match.params.id)),
  }
};

export default withRouter(connect(mSTP, mDTP)(ReviewForm));
