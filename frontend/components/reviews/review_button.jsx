import React from "react";
import { withRouter } from "react-router-dom";

class ReviewButton extends React.Component {
  handleBtnClick(e){
    if (this.props.loggedIn) {
      this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}/leave-a-review`)
    } else {
      document.querySelector(".modal-login").classList.add("is-open");
    }
  }

  render(){
    return (
      <button 
      className="btn leave-a-review-button"
      onClick={this.handleBtnClick.bind(this)}
      >Leave a Review</button>
      )
    }
  }

export default withRouter(ReviewButton);

