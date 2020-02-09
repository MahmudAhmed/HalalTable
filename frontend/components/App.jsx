import React from "react";
import { Route } from "react-router-dom";

import { AuthRoute, ProtectRoute } from "../util/route_util";
import LoginFormContainer from "./session_forms/login_form_container";
import SignupFormContainer from "./session_forms/signup_form_container";
import NavBar from "./nav_bar/nav_bar_container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendarAlt, faMapMarkerAlt, faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCalendarAlt, faAngleDown, faMapMarkerAlt);



const App = () => (
  <div id="doc">
      <header>
        
        <NavBar />
      </header>
      {/* <LoginFormContainer /> */}
      {/* <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} /> */}
      {/* <footer id="footer">
        <p>Mahmud Ahmed</p>
      
      </footer> */}
  </div>
);

export default App;
