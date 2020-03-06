import { RECEIVE_RESERVATIONS, RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservations_action";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return Object.assign(action.reservations)
    case RECEIVE_RESERVATION:
      return action.reservation
    case REMOVE_RESERVATION:
      const reservations = Object.assign({}, state)
      delete reservations[action.reservationId]
      return reservations
    default:
      return state;
  }
}

export default reservationsReducer;


