import * as APIUtil from "../util/session_api_util";

///const

export const RECEIVE_USER = "RECEIVE_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

////regular actions

const receiveCurrentUser = user => ({
  type: RECEIVE_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_USER
});

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
};


///thunk actions

export const login = formData => dispatch => {
  return APIUtil.loginUser(formData).then(
    user => dispatch(receiveCurrentUser(user)),
    err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  );
};

export const signup = formData => dispatch => {
  return APIUtil.signUpUser(formData)
    .then((user) => { 
      dispatch(receiveCurrentUser(user));
      return true;
    },
      (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()),
      (err) => dispatch(receiveErrors(err.responseJSON)));
};




