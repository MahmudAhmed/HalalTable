import { connect } from "react-redux";
import Search from "./search";
import { requestRestaurants } from "../../actions/restaurant_action";

const mapStateToProps = ({ entities }) => {
  return {
    restaurants: entities.restaurants
  }
}

const mapDispatchToProps = dispatch => ({
  requestRestaurants: () => dispatch(requestRestaurants()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Search);



