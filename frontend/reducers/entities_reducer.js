import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reviewsReducer from "./reviews_reducer";
import menusReducer from "./menus_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  menus: menusReducer
});

export default entitiesReducer;
