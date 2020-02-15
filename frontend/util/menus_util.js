export const fetchMenu = restaurantId => {
  return $.ajax({
    method: "GET",
    url: `/api/restaurants/${restaurantId}/menus`,
  });
};