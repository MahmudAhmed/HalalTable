
import { RECEIVE_RESTAURANTS } from "../actions/restaurant_action";
import { RECEIVE_MENU } from "../actions/menus_action";


const menusReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MENU:
      return Object.assign(action.menu)
    case RECEIVE_RESTAURANTS:
      return [];
    default:
      return state;
  }
}

export default menusReducer;


