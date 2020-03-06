import { RECEIVE_USER, RECEIVE_ERRORS } from "../actions/session_action";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }

}

export default sessionErrorsReducer;


