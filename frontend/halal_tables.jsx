import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login } from "./actions/session_action";
import {
  requestRestaurants,
  requestRestaurant
} from "./actions/restaurant_action";
import { fetchRestaurant } from "./util/restaurant_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.requestRestaurants = requestRestaurants;
  window.requestRestaurant = requestRestaurant;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
}); 