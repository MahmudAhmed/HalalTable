import * as APIUtil from "../util/reservations_util";

///const

export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS"

////regular actions

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});

const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});



///thunk actions

export const requestReservations = (userId) => dispatch => {
  return APIUtil.fetchReservations(userId).then(
    (reservations) => dispatch(receiveReservations(reservations))
  );
};

export const requestReservation = (userId, reservationId) => dispatch => {
  return APIUtil.fetchReservation(userId, reservationId).then(
    (reservation) => dispatch(receiveReservations(reservation))
  );
};

export const createReservation = (formData, userId) => dispatch => {
  return APIUtil.postReservation(formData, userId).then(
    (reservation) => {
      dispatch(receiveReservation(reservation))
      
    },
    (err) => {
      dispatch(receiveReservationErrors(err.responseJSON))
    }
  );
};

export const updateReservation = (formData, userId, reservationId) => dispatch => {
  return APIUtil.patchReservation(formData, userId, reservationId).then(
    (reservation) => dispatch(receiveReservation(reservation)),
    (err) => dispatch(receiveReservationErrors(err.responseJSON))
  );
};

export const deleteReservation = (userId, reservationId) => dispatch => {
  return APIUtil.destroyReservation(userId, reservationId).then(
    () => dispatch(removeReservation(reservationId)),
    (err) => dispatch(receiveReservationErrors(err.responseJSON))
  );
};