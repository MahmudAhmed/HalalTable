import React from "react";
// import { Link } from "react-router-dom";
import LoginSessionForm from "../session_forms/login_form_container";
import SignUpSessionForm from "../session_forms/signup_form_container";
import ChangeLocation from "./change_location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends React.Component {

  handleSessionClick(targetElement) {
    return (e) => {
      e.preventDefault()
      $(`.${targetElement}`).addClass("is-open");
    }
  }

  toggleDisplay(targetElement) {
    return (e) => {
      $(`.${targetElement}`).toggleClass("is-open");
      $(`.${targetElement}-triangle`).toggleClass("is-open");
    }
  }

  handleLogout(e){
    e.preventDefault();
    // debugger
    // $(".header-menu").removeClass("is-open");
    // $(".header-menu-triangle").removeClass("is-open");
    this.props.logout()
  }

  render() {
    // debugger
    const { currentUser } = this.props;
    const display = currentUser ? (
      <ul className="right-header">
        <li className="nav-bar-calender">
          <div onClick={this.toggleDisplay("calender")}><FontAwesomeIcon icon="calendar-alt" className="header-icon calendar-icon"/></div>
          <span className="calender-triangle"></span>
          <ul className="calender">
            <div className="menu-sub-header">Upcoming</div>
            <div className="no-reservations">You have no upcoming reservations</div>
          </ul>
        </li>
        <li className="main-menu">
          <div className="greetings" onClick={this.toggleDisplay("header-menu")}>
            <p> Hi, {currentUser.first_name}!</p>
            <div>
              <FontAwesomeIcon icon="angle-down" className="header-icon change-location-icon dropdown-icon" />
            </div>
          </div>
          <span className="header-menu-triangle"></span>
          <ul className="header-menu">
            <li><a href="#">My Profile</a></li>
            <li><a href="#">My Dining History</a></li>
            <li><a href="#">My Saved Restaurants</a></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Sign Out</a></li>
          </ul>
        </li>
      </ul> ) : (
      <ul className="header-buttons">
          <li> <a href="#" className="signup-btn" title="Sign Up" onClick={this.handleSessionClick("modal-signup")}>Sign Up</a></li>
          <li> <a href="#" className="signin-btn" title="Sign In" onClick={this.handleSessionClick("modal-login")}>Sign In</a></li>
      </ul>
    );
    return (
      <section className="header-bar">
        <nav className="left-header">
          <h1 className="header-logo">
            <img src="/assets/logo-2.png" />
          </h1>
          <ChangeLocation toggleDisplay={this.toggleDisplay} />
        </nav>
        <nav>
          <div>{display}</div>
          <LoginSessionForm />
          <SignUpSessionForm />
        </nav>
      </section>
      );
  }
}

export default NavBar;
