import React from "react";
import LoginSessionForm from "../session_forms/login_form_container";
import SignUpSessionForm from "../session_forms/signup_form_container";
import ChangeLocation from "./change_location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSessionClick(targetElement) {
    return e => {
      e.preventDefault();
      document.querySelector(`.${targetElement}`).classList.toggle("is-open");
    };
  }

  handleSideBarClick(){
    document.querySelector(".sidenav").classList.toggle("is-open");
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    document.querySelector(".sidenav").classList.remove("is-open");
  }

  handleDarkClick(e) {
    e.preventDefault();
    document
      .querySelector(".sidenav")
      .classList.remove("is-open");
  }

  loginDemoUser() {
    this.props.login({ email: "demo@ht.com", password: "fireball42" });
    document.querySelector(".sidenav").classList.remove("is-open");
  }

  render() {
    const { currentUser } = this.props;
    const display = currentUser ? (
      <>
        <ul className="right-header">
          <li className="nav-bar-calender">
            <div>
              <FontAwesomeIcon
                icon="calendar-alt"
                className="header-icon calendar-icon"
              />
            </div>
            <span className="calender-triangle"></span>
            <ul className="calender">
              <div className="menu-sub-header">Upcoming</div>
              <div className="no-reservations">
                You have no upcoming reservations
              </div>
            </ul>
          </li>
          <li className="main-menu">
            <div className="greetings">
              <p> Hi, {currentUser.first_name}!</p>
              <div>
                <FontAwesomeIcon
                  icon="angle-down"
                  className="header-icon change-location-icon dropdown-icon"
                />
              </div>
            </div>
            <span className="header-menu-triangle"></span>
            <ul className="header-menu">
              <Link to="/my-profile">
                <li>
                  My Profile
                </li>
              </Link>
              <li>
                <a href="#">My Dining History</a>
              </li>
              <li>
                <a href="#">My Saved Restaurants</a>
              </li>
              <li>
                <a href="#" onClick={this.handleLogout.bind(this)}>
                  Sign Out
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="sidenav">
          <section
            className="sidbar-screen"
            onClick={this.handleDarkClick}
          ></section>
          <ul className="sidenav-menu">
            <div className="top-bar"></div>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Favorites</a>
            </li>
            <li>
              <a href="#">My Dining History</a>
            </li>
            <li>
              <a href="#" onClick={this.handleLogout.bind(this)}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </>
    ) : (
      <>
        <ul className="header-buttons">
          <li>
            {" "}
            <a
              href="#"
              className="signup-btn"
              title="Sign Up"
              onClick={this.handleSessionClick("modal-signup")}
            >
              Sign Up
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#"
              className="signin-btn"
              title="Sign In"
              onClick={this.handleSessionClick("modal-login")}
            >
              Sign In
            </a>
          </li>
          <li
            className="signin-btn demo-button"
            title="Use Demo Account"
            onClick={this.loginDemoUser}
          >
            Demo
          </li>
        </ul>
        <div className="sidenav">
          <section
            className="sidbar-screen"
            onClick={this.handleDarkClick}
          ></section>
          <ul className="sidenav-menu">
            <div className="top-bar"></div>
            <li>
              {" "}
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              {" "}
              <Link to="/login">Sign In</Link>
            </li>
            <li onClick={this.loginDemoUser}> Demo User </li>
          </ul>
        </div>
      </>
    );
    return (
      <section className="header-bar">
        <nav className="left-header">
          {/* <span id="fullscreen"></span> */}
          <h1 className="header-logo">
            <Link to="/restaurants/">
              <img src={window.headerLogo} />
            </Link>
          </h1>
          <ChangeLocation />
        </nav>
        <nav>
          <div>{display}</div>
          <LoginSessionForm />
          <SignUpSessionForm />
        </nav>
        <div id="hamburger-icon" onClick={this.handleSideBarClick} >
          <FontAwesomeIcon icon="bars" className="header-icon hamburger-icon" />
        </div>
      </section>
    );
  }
}

export default withRouter(NavBar);
