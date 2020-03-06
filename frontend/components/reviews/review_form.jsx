import React from "react";
import StarRatings from "react-star-ratings";
import { Link} from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.review;
    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeRating = this.changeRating.bind(this)
    this.handleTextarea = this.handleTextarea.bind(this)
  }

  changeRating(newRating, name) {
    this.setState({
      [name]: newRating
    });
  }

  handleTextarea(e){
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const { formAction, restaurantId, history, errors } = this.props;
    formAction(this.state, restaurantId).then(() => (errors.length === 0) ? (history.push(`/restaurants/${restaurantId}`)) : "")
  }

  render() {
    const { errors} = this.props
    return (
      <form onSubmit={this.handleSubmit } className="review-form" >
        {errors.map((err, idx) => <h2 key={idx} className="review-errors" >{err}</h2>)}
        <div className="review-form-option">
          <label id="review-form-label">Overall</label>
          <StarRatings
            rating={this.state.overall}
            changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
            name='overall'
          />
        </div>
        <div className="review-form-option">
          <label id="review-form-label">Food</label>
          <StarRatings
            rating={this.state.food}
            changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
            name='food'
          />
        </div>
        <div className="review-form-option">
          <label id="review-form-label">Service</label>
          <StarRatings
            rating={this.state.service}
            changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
            name='service'
          />
        </div>
        <div className="review-form-option">
          <label id="review-form-label">Ambience</label>
          <StarRatings
            rating={this.state.ambience}
            changeRating={this.changeRating}
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
            name='ambience'
          />
        </div>
        <div className="review-form-option">
          <label id="review-form-label">How was your experience?</label>
          <br />
          <textarea 
            className="textarea-form-input"
            defaultValue={this.state.body}
            onChange={this.handleTextarea} 
            cols="70" rows="10"
            placeholder="Would you recommend to our friends and family?"
            required></textarea>
          
        </div>
        <button className="btn" 
        id="review-form-btn"
        >Submit</button>
        <span id="secondary-link"
        ><Link to={`/restaurants/${this.props.match.params.restaurantId}`}>Cancel</Link></span>
      </form>
    );
  }

}

export default ReviewForm;