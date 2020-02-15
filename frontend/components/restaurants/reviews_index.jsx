import React from "react";
import ReviewsIndexItem from "./reviews_index_item";
import StarRatings from "react-star-ratings";

class ReviewsIndex extends React.Component {

  render() {
    const { reviews } = this.props;
    return (
      <div id="show-review">
        <h2 className="display-subheader">What XX People Are Saying</h2>
        <section className="overall-review-container">
          <section className="overall-review-left">
            <p>Overall ratings and reviews</p>
            <p>
              Your trust is our top concern, so businesses can't pay to alter or
              remove their reviews.
            </p>

            <div>
              <StarRatings
                rating={4.5}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="orange"
              />
              <span>4.5 based on recent ratings</span>
            </div>

            <ul className="ratings-breakdown">
              <li>
                <span>4.1</span>
                <p>Food</p>
              </li>
              <li>
                <span>4.1</span>
                <p>Service</p>
              </li>
              <li>
                <span>4.1</span>
                <p>Ambiance</p>
              </li>
              <li>
                <span>4.1</span>
                <p>Value</p>
              </li>
            </ul>
          </section>
          <section className="overall-review-right">
            <ul className="review-bars">
              <li id="bar">
                <span className="bar-label">5</span>
                <div className="back-bar" title="100 reviews">
                  <div
                    className="bar-percentage"
                    style={{
                      width: "50%"
                      // width: `${reviews.review_percentage[1]}`
                    }}
                  ></div>
                </div>
              </li>
              <li id="bar">
                <span className="bar-label">4</span>
                <div className="back-bar" title="65 reviews">
                  <div
                    className="bar-percentage"
                    style={{
                      width: "25%"
                    }}
                  ></div>
                </div>
              </li>
              <li id="bar">
                <span className="bar-label">3</span>
                <div className="back-bar" title="40 reviews">
                  <div
                    className="bar-percentage"
                    style={{
                      width: "10%"
                    }}
                  ></div>
                </div>
              </li>
              <li id="bar">
                <span className="bar-label">2</span>
                <div className="back-bar" title="20 reviews">
                  <div
                    className="bar-percentage"
                    style={{
                      width: "5%"
                    }}
                  ></div>
                </div>
              </li>
              <li id="bar">
                <span className="bar-label">1</span>
                <div className="back-bar" title="10 reviews">
                  <div
                    className="bar-percentage"
                    style={{
                      width: "1%"
                    }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>
        </section>
        <div>
          <ul>
              { reviews.map(review => <ReviewsIndexItem key={review.id} review={review}/>)}
          </ul>
        </div>
      </div>
    );
  }

}

export default ReviewsIndex;