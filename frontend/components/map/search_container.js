import { connect } from "react-redux";
import Search from "./search";
import { requestRestaurants } from "../../actions/restaurant_action";

const mapStateToProps = ({ entities }) => {
  return {
    restaurants: entities.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestRestaurants: (args) => dispatch(requestRestaurants(args)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);



