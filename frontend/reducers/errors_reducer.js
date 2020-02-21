import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import reviewsErrorsReducer from "./reviews_error_reducer";
import reservationsErrorsReducer from "./reservations_error_reducer";
import favoritesErrorsReducer from "./favorites_error_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviews: reviewsErrorsReducer,
  reservation: reservationsErrorsReducer,
  favorites: favoritesErrorsReducer
});

export default errorsReducer;


