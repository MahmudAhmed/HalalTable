import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";

import { AuthRoute, ProtectRoute } from "../util/route_util";

import NavBar from "./nav_bar/nav_bar_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faBookmark, 
  faCommentAlt,
  faUser, 
  faCalendar, 
  faMoneyBillAlt, 
  faBuilding, 
  faClock, 
  faCreditCard,
  faCalendarTimes,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faAngleDown,
  faBars,
  faHamburger,
  faUtensils,
  faSignLanguage,
  faTshirt,
  faSubway,
  faExternalLinkAlt,
  faPhoneAlt,
  faTrophy,  
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithubSquare,
  faMedium
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faCalendarAlt,
  faAngleDown,
  faMapMarkerAlt,
  faBars,
  faHamburger,
  faBookmark,
  faCommentAlt,
  faUtensils,
  faMoneyBillAlt,
  faBuilding,
  faClock,
  faSignLanguage,
  faTshirt,
  faSubway,
  faCreditCard,
  faExternalLinkAlt,
  faPhoneAlt,
  faCalendar,
  faUser,
  faCalendarCheck,
  faCalendarTimes,
  faLinkedin,
  faGithubSquare,
  faMedium,
  faTrophy
);

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
