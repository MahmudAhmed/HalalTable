import React from "react";
import { Link, withRouter } from "react-router-dom";

const ReviewButton = (props) => {
  
  return (
  <button className="btn leave-a-review-button"
  ><Link to={`/restaurants/${props.match.params.restaurantId}/leave-a-review`}
  >Leave a Review</Link></button>
  )
  }

export default withRouter(ReviewButton);

