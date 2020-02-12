import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute, ProtectRoute } from "../util/route_util";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import NavBar from "./nav_bar/nav_bar_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faCommentAlt, faMoneyBillAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faAngleDown,
  faBars,
  faHamburger,
  faUtensils
  
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCalendarAlt, 
  faAngleDown, 
  faMapMarkerAlt, 
  faBars, 
  faHamburger, 
  faBookmark, 
  faCommentAlt, 
  faUtensils, 
  faMoneyBillAlt
);
import { SignInPageContainer } from "./session_forms/login_form_container";
import { SignUpPageContainer } from "./session_forms/signup_form_container";
import RestaurantsIndexContainer from "./restaurants/restaurants_index_container";
import RestaurantShowContainer from "./restaurants/restaurant-show-container";


const App = () => (
  <div id="doc">
    <header>
      <NavBar />
    </header>
    <AuthRoute path="/login" component={SignInPageContainer} />
    <AuthRoute path="/signup" component={SignUpPageContainer} />
    <Route exact path="/restaurants" component={RestaurantsIndexContainer} />
    <Route
      path="/restaurants/:restaurantId"
      component={RestaurantShowContainer}
    />

    {/* <LoginFormContainer /> */}
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    {/* <footer id="footer">
        <p>Mahmud Ahmed</p>
      
      </footer> */}
  </div>
);

export default App;
