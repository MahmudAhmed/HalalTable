import React from "react";
import ReviewsIndexItem from "./reviews_index_item";
import StarRatings from "react-star-ratings";
import CreateReviewFormContainer from "./create_review_form_container";
import { Route, withRouter } from "react-router-dom";
import ReviewButtonContainer from "./review_button_container";
import EditReviewFormContainer from "./edit_review_form_container";
import { AuthRoute, ProtectRoute } from "../../util/route_util";

class ReviewsIndex extends React.Component {
  render() {
    const { reviews, restaurant, currentUser, deleteReview} = this.props;
    return (
      <div id="show-review">
        <h2 className="display-subheader">What {reviews.length} People Are Saying</h2>
        <section className="overall-review-container">
          <section className="overall-review-left">
            <p>Overall ratings and reviews</p>
            <p>
              Your trust is our top concern, so businesses can't pay to alter or
              remove their reviews.
            </p>

            <div>
              <StarRatings
                rating={restaurant.overall_ratings}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="orange"
              />
              <span>{restaurant.overall_ratings.toFixed(1)} based on recent ratings</span>
            </div>

            <ul className="ratings-breakdown">
              <li>
                <span>{restaurant.overall_ratings.toFixed(1)}</span>
                <p>Overall</p>
              </li>
              <li>
                <span>{restaurant.overall_food_ratings.toFixed(1)}</span>
                <p>Food</p>
              </li>
              <li>
                <span>{restaurant.overall_service_ratings.toFixed(1)}</span>
                <p>Service</p>
              </li>
              <li>
                <span>{restaurant.overall_ambience_ratings.toFixed(1)}</span>
                <p>Ambience</p>
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
                      width: `${restaurant.total_ratings[5]}`
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
                      width: `${restaurant.total_ratings[4]}`
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
                      width: `${restaurant.total_ratings[3]}`
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
                      width: `${restaurant.total_ratings[2]}`
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
                      width: `${restaurant.total_ratings[1]}`
                    }}
                  ></div>
                </div>
              </li>
            </ul>
          </section>
        </section>
        <div className="leave-a-review" id="review-form">
          <div className="leave-a-review-form-container">
            <ProtectRoute path="/restaurants/:restaurantId/leave-a-review" component={CreateReviewFormContainer} />
            <ProtectRoute path="/restaurants/:restaurantId/reviews/:id" component={EditReviewFormContainer} />
          </div>
          <Route exact path="/restaurants/:restaurantId" component={ReviewButtonContainer} />
        </div>
        <div>
          <ul>
              { reviews.map(review => 
              <ReviewsIndexItem 
              key={review.id} 
              review={review} 
              currentUser={currentUser} 
              deleteReview={deleteReview}
              />)}
          </ul>
        </div>
      </div>
    );
  }

}

export default withRouter(ReviewsIndex);




// import React from "react";
// import ReviewsIndexItem from "./reviews_index_item";
// import StarRatings from "react-star-ratings";
// import ReviewFormContainer from "./review_form_container";
// import { Route } from "react-router-dom";


// class ReviewsIndex extends React.Component {

//   // handleBtnClick(e){
//   //   e.preventDefault();
//   //   const btn = document.getElementsByClassName("leave-a-review-button")[0]
//   //   const form = document.getElementsByClassName("leave-a-review-form-container")[0]
//   //   form.classList.toggle("is-open");
//   //   btn.classList.toggle("is-open");
//   // }


//   render() {
//     const { reviews, restaurant, currentUser, deleteReview } = this.props;
//     return (
//       <div id="show-review">
//         <h2 className="display-subheader">What {reviews.length} People Are Saying</h2>
//         <section className="overall-review-container">
//           <section className="overall-review-left">
//             <p>Overall ratings and reviews</p>
//             <p>
//               Your trust is our top concern, so businesses can't pay to alter or
//               remove their reviews.
//             </p>

//             <div>
//               <StarRatings
//                 rating={restaurant.overall_ratings}
//                 starDimension="20px"
//                 starSpacing="1px"
//                 starRatedColor="orange"
//               />
//               <span>{restaurant.overall_ratings.toFixed(1)} based on recent ratings</span>
//             </div>

//             <ul className="ratings-breakdown">
//               <li>
//                 <span>{restaurant.overall_ratings.toFixed(1)}</span>
//                 <p>Overall</p>
//               </li>
//               <li>
//                 <span>{restaurant.overall_food_ratings.toFixed(1)}</span>
//                 <p>Food</p>
//               </li>
//               <li>
//                 <span>{restaurant.overall_service_ratings.toFixed(1)}</span>
//                 <p>Service</p>
//               </li>
//               <li>
//                 <span>{restaurant.overall_ambience_ratings.toFixed(1)}</span>
//                 <p>Ambience</p>
//               </li>
//             </ul>
//           </section>
//           <section className="overall-review-right">
//             <ul className="review-bars">
//               <li id="bar">
//                 <span className="bar-label">5</span>
//                 <div className="back-bar" title="100 reviews">
//                   <div
//                     className="bar-percentage"
//                     style={{
//                       width: `${restaurant.total_ratings[5]}`
//                     }}
//                   ></div>
//                 </div>
//               </li>
//               <li id="bar">
//                 <span className="bar-label">4</span>
//                 <div className="back-bar" title="65 reviews">
//                   <div
//                     className="bar-percentage"
//                     style={{
//                       width: `${restaurant.total_ratings[4]}`
//                     }}
//                   ></div>
//                 </div>
//               </li>
//               <li id="bar">
//                 <span className="bar-label">3</span>
//                 <div className="back-bar" title="40 reviews">
//                   <div
//                     className="bar-percentage"
//                     style={{
//                       width: `${restaurant.total_ratings[3]}`
//                     }}
//                   ></div>
//                 </div>
//               </li>
//               <li id="bar">
//                 <span className="bar-label">2</span>
//                 <div className="back-bar" title="20 reviews">
//                   <div
//                     className="bar-percentage"
//                     style={{
//                       width: `${restaurant.total_ratings[2]}`
//                     }}
//                   ></div>
//                 </div>
//               </li>
//               <li id="bar">
//                 <span className="bar-label">1</span>
//                 <div className="back-bar" title="10 reviews">
//                   <div
//                     className="bar-percentage"
//                     style={{
//                       width: `${restaurant.total_ratings[1]}`
//                     }}
//                   ></div>
//                 </div>
//               </li>
//             </ul>
//           </section>
//         </section>
//         <div className="leave-a-review" id="review-form">
//           <div className="leave-a-review-form-container">
//             <Route path="/restaurants/:restaurantId/leave-a-review" component={ReviewFormContainer} />

//             {/* <ReviewFormContainer handleBtnClick={this.handleBtnClick}/> */}
//           </div>
//           <button
//             className="btn leave-a-review-button is-open"
//             onClick={this.handleBtnClick}>Leave a Review</button>
//         </div>
//         <div>
//           <ul>
//             {reviews.map(review =>
//               <ReviewsIndexItem
//                 key={review.id}
//                 review={review}
//                 currentUser={currentUser}
//                 deleteReview={deleteReview}
//                 handleBtnClick={this.handleBtnClick}
//               />)}
//           </ul>
//         </div>
//       </div>
//     );
//   }

// }

// export default ReviewsIndex;