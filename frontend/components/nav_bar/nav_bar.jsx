import React from "react";
import LoginSessionForm from "../session_forms/login_form_container";
import SignUpSessionForm from "../session_forms/signup_form_container";
import ChangeLocation from "./change_location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, withRouter } from "react-router-dom";

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this)
    this.loginDemoUser = this.loginDemoUser.bind(this)
  }

  handleSessionClick(targetElement) {
    return (e) => {
      e.preventDefault()
      $(`.${targetElement}`).addClass("is-open");
    }
  }

  toggleDisplay(targetElement) {
    return (e) => {
      if ($(`.${targetElement}`).hasClass("is-open")) {
        $(`.${targetElement}`).removeClass("is-open");
        $(`.${targetElement}-triangle`).removeClass("is-open");
        return; 
      }
      $(".is-open").removeClass("is-open");
      $(`.${targetElement}`).addClass("is-open");
      $(`.${targetElement}-triangle`).addClass("is-open");
    }
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout()
    $(".sidenav").removeClass("is-open");
  }

  handleDarkClick(e) {
    e.preventDefault();
    $(".sidenav").removeClass("is-open");
  }

  loginDemoUser(){
    this.props.login({ email: "demo@ht.com", password: "fireball42" })
    $(".sidenav").removeClass("is-open");
  }
  


  render() {
    // debugger
    const { currentUser } = this.props;
    const display = currentUser ? (
      <>
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
        </ul>
        <div className="sidenav">
          <section className="sidbar-screen" onClick={this.handleDarkClick}></section>
          <ul className="sidenav-menu">
            <div className="top-bar"></div>
            <li><a href="#">My Profile</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">My Dining History</a></li>
            <li><a href="#" onClick={this.handleLogout.bind(this)}>Sign Out</a></li>
          </ul>
        </div>
      </> ) : ( <>
        <ul className="header-buttons">
            <li> <a href="#" className="signup-btn" title="Sign Up" onClick={this.handleSessionClick("modal-signup")}>Sign Up</a></li>
            <li> <a href="#" className="signin-btn" title="Sign In" onClick={this.handleSessionClick("modal-login")}>Sign In</a></li>
            <li className="signin-btn demo-button" title="Use Demo Account" onClick={this.loginDemoUser}>Demo</li>

        </ul>
          <div className="sidenav">
            <section className="sidbar-screen" onClick={this.handleDarkClick}></section>
            <ul className="sidenav-menu">
              <div className="top-bar"></div>
            <li> <Link to="/signup">Sign Up</Link></li>
            <li> <Link to="/login">Sign In</Link></li>
            <li onClick={this.loginDemoUser}> Demo User </li>
            </ul>
          </div>
      </>
    );
    debugger
    return (
      <section className="header-bar">
        <nav className="left-header">
          {/* <span id="fullscreen"></span> */}
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
        <div id="hamburger-icon" onClick={this.toggleDisplay("sidenav")}>
          <FontAwesomeIcon icon="bars" className="header-icon hamburger-icon" />
        </div>
        
      </section>
      );
  }
}

export default withRouter(NavBar);
