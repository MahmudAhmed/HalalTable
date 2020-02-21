import React from "react";
import { Redirect, Link, withRouter, Route } from "react-router-dom";
import ProfileContainer from "./profile_container";

class MainMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = { selected = "1" }
  }
  render() {
    return (
      <div className="profile-page-container">
        <aside className="profile-side-container">
          <ul className="main-menu-profile">
            <li>
              <span>My Profile</span>
            </li>
            <li>
              <span>My Reservations</span>
            </li>
            <li>
              <span>My Saved Kitchens</span>
            </li>
          </ul>
        </aside>
        <Route
          path="/my/profile"
          component={ProfileContainer}
        />
      </div>
    )
  }
}

export default MainMenu;
