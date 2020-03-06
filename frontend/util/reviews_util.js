export const fetchReviews = restaurantId => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants/${restaurantId}/reviews`,
  });
};

export const createReview = (formData, restaurantId) => {
  return $.ajax({
    method: "POST",
    url: `/api/restaurants/${restaurantId}/reviews`,
    data: { review: formData }
  });
};

export const updateReview = (formData, restaurantId, reviewId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/restaurants/${restaurantId}/reviews/${reviewId}`,
    data: { review: formData }
  });
};

export const deleteReview = (restaurantId, reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/restaurants/${restaurantId}/reviews/${reviewId}`
  });
};
