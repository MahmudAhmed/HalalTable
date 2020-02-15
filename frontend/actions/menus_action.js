import * as APIUtil from "../util/menus_util";

///const

export const RECEIVE_MENU = "RECEIVE_MENU";

////regular actions

const receiveMenu = menu => ({
  type: RECEIVE_MENU,
  menu
});


///thunk actions

export const requestMenu = (restaurantId) => dispatch => {
  return APIUtil.fetchMenu(restaurantId).then(
    (menu) => dispatch(receiveMenu(menu))
  );
};