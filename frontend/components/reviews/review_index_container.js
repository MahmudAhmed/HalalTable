import { connect } from "react-redux";
import ReviewsIndex from "./reviews_index";
import { updateReview, deleteReview } from "../../actions/reviews_action";


const mSTP = ({session}) => ({
    currentUser: session.id,
})

const mDTP = (dispatch) => ({
  updateReview: (formData, restaurantId, reviewId) => dispatch(updateReview(formData, restaurantId, reviewId)),
  deleteReview: (restaurantId, reviewId) => dispatch(deleteReview(restaurantId, reviewId))
});


export default connect(mSTP, mDTP)(ReviewsIndex);

