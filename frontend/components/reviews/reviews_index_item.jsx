import React from "react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, withRouter } from "react-router-dom";

class ReviewsIndexItem extends React.Component {
  render() {
    const { review, currentUser, deleteReview, match } = this.props;
    const displayButtons = currentUser === review.user_id ? ( 
    <div className="edit-delete-review-btns">
        
        <AnchorLink href="#show-review" offset="45">
          <span id="secondary-link"
          ><Link to={`/restaurants/${match.params.restaurantId}/reviews/${review.id}`}>Edit</Link></span>
        </AnchorLink>
        <span id="secondary-link"
          onClick={() => deleteReview(review.restaurant_id, review.id)}
        >Delete</span>
    </div>
    ) : "";
    return (
      <li className="reviews-index-item">
        <div className="left-side-reviews">
          <div className="profile-pic" style={{backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'}}>
            <div className="profile-pic-initial">{review.first_name[0] + review.last_name[0]}</div>
          </div>
          <div className="left-bottom">
            <div className="profile-pic-name">{review.first_name + " " + review.last_name}</div>
            <div className="profile-pic-city">{review.city}</div>
            <div className="profile-pic-reviews">
              <FontAwesomeIcon
                icon={["far", "comment-alt"]}
                className="profile-review-icon"
              />            
              <p>{review.total_reviews_by_user} {review.total_reviews_by_user === 1 ? "review" : "reviews"}</p>
            </div>
          </div>

        </div>
        <div className="right-side-reviews">
          <div>
            <StarRatings
              rating={review.overall}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="red"
            />
          </div>

          <ul className="user-review-breakdown">
            <li>
              <p>Overall</p>
              <span>{review.overall}</span>
            </li>
            <li>
              <p>Food</p>
              <span>{review.food}</span>
            </li>
            <li>
              <p>Service</p>
              <span>{review.service}</span>
            </li>
            <div className="last-child">
              <p>Ambience</p>
              <span>{review.ambience}</span>
            </div>
          </ul>
          <section id="the-review">
            <p>
              {review.body}
            </p>
            {displayButtons}
          </section>
        </div>
      </li>
    );
  }

}

export default withRouter(ReviewsIndexItem);