export const fetchReservations = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/reservations`,
  });
};

export const fetchReservation = (userId, reservationId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/reservations/${reservationId}`,
  });
};

export const postReservation = (formData, userId) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/reservations`,
    data: { reservation: formData }
  });
};

export const patchReservation = (formData, userId, reservationId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}/reservations/${reservationId}`,
    data: { reservation: formData }
  });
};

export const destroyReservation = (userId, reservationId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/reservations/${reservationId}`
  });
};
