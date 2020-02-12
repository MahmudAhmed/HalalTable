import React from "react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewsIndexItem extends React.Component {


  render() {

    return (
      <li className="reviews-index-item">
        <div className="left-side-reviews">
          <div className="profile-pic">
            <div className="profile-pic-initial">MA</div>
          </div>
          <div className="left-bottom">
            <div className="profile-pic-name">El Chapo</div>
            <div className="profile-pic-city">Brooklyn</div>
            <div className="profile-pic-reviews">
              <FontAwesomeIcon
                icon={["far", "comment-alt"]}
                className="profile-review-icon"
              />            
              <p>1 review</p>
            </div>
          </div>

        </div>
        <div className="right-side-reviews">
          <div>
            <StarRatings
              rating={4.403}
              starDimension="20px"
              starSpacing="1px"
              starRatedColor="red"
            />
          </div>

          <ul className="user-review-breakdown">
            <li>
              <p>Food</p>
              <span>5</span>
            </li>
            <li>
              <p>Service</p>
              <span>5</span>
            </li>
            <li>
              <p>Ambience</p>
              <span>5</span>
            </li>
            <div className="last-child">
              <p>Value</p>
              <span>5</span>
            </div>
          </ul>
          <section id="the-review">
            <p>
              Anonymous methods and anonymous types are really all called Chuck Norris. They just don't like to boast.
            </p>
          </section>
        </div>
      </li>
    );
  }

}

export default ReviewsIndexItem;