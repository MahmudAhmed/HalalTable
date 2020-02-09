import { RECEIVE_USER, LOGOUT_USER } from "../actions/session_action";

const _defaultSession = {
  id: null
}

const sessionReducer = (state = _defaultSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_USER:
      return _defaultSession;
    default:
      return state;
  }
}

export default sessionReducer;


