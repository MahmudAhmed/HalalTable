import { RECEIVE_RESERVATION, REMOVE_RESERVATION, RECEIVE_RESERVATION_ERRORS } from "../actions/reservations_action";


const reservationsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return [];
    case REMOVE_RESERVATION:
      return [];
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    default:
      return state;
  }

}

export default reservationsErrorsReducer;

