import React from "react";
import { Link, Route } from "react-router-dom";
import ProfileContainer from "./profile_container";
import MyReservationsContainer from "./my_reservations_container";
import MyFavoritesContainer from "./favorites_container";

class MainMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = { selectedButton: null };
    this.buttonSelected = this.buttonSelected.bind(this);
  }

  buttonSelected(selectedButton){
    return e => { 
      this.setState({ selectedButton: selectedButton })
    }
  }

  render() {
    return (
      <div className="profile-page-container">
        <aside className="profile-side-container">
          <div className="main-menu-profile">
            <div className={1 === this.state.selectedBtn ? "is-selected" : ""}
              onClick={ this.buttonSelected(1)} >
              <Link to="/my/profile"><span>My Profile</span></Link>
            </div>
            <div className={2 === this.state.selectedBtn ? "is-selected" : ""}
              onClick={this.buttonSelected(2)} >
              <Link to="/my/reservations"><span>My Reservations</span></Link>
            </div>
            <div className={3 === this.state.selectedBtn ? "is-selected" : ""}
              onClick={this.buttonSelected(3)} >
              <Link to="/my/favorites"><span>My Saved Kitchens</span></Link>
            </div>
          </div>
        </aside>
        <Route
          path="/my/profile"
          component={ProfileContainer}
        />
        <Route
          path="/my/reservations"
          component={MyReservationsContainer}
        />
        <Route
          path="/my/favorites"
          component={MyFavoritesContainer}
        />
      </div>
    )
  }
}

export default MainMenu;
