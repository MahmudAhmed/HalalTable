import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { createFavorite, deleteFavorite, requestFavorites } from "./actions/favorites_action";



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
  window.createFavorite = createFavorite;
  window.deleteFavorite = deleteFavorite;
  window.requestFavorites = requestFavorites;
  window.getState = store.getState;
  window.dispatch = store.dispatch;



  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
}); 