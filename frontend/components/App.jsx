import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectRoute } from "../util/route_util";
import NavBar from "./nav_bar/nav_bar_container";
import { library } from "./icons"
import { SignInPageContainer } from "./session_forms/login_form_container";
import { SignUpPageContainer } from "./session_forms/signup_form_container";
import RestaurantsIndexContainer from "./restaurants/restaurants_index_container";
import RestaurantShowContainer from "./restaurants/restaurant-show-container";
import CreateReservationContainer from "./reservations/create_reservation_container";
import ShowReservationContainer from "./reservations/show_reservation_container";
import { Footer } from "./footer/footer";
import MainMenu from "./main_menu/main-menu";

const App = () => (
  <div id="doc">
    <header>
      <NavBar />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SignInPageContainer} />
      <AuthRoute path="/signup" component={SignUpPageContainer} />
      <ProtectRoute
        path="/my/"
        component={MainMenu}
      />
      <Route
        path="/restaurants/:restaurantId"
        component={RestaurantShowContainer}
      />

      <ProtectRoute
        exact path="/reservations/create/new"
        component={CreateReservationContainer}
      />


      <ProtectRoute
        exact path="/reservations/:reservationId"
        component={ShowReservationContainer}
      />
      <Route exact path="/restaurants" component={RestaurantsIndexContainer} />
      <Route component={RestaurantsIndexContainer}/>
    </Switch>
    <Footer />
  </div>
);

export default App;
