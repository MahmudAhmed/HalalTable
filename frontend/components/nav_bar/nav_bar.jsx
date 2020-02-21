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

  componentDidUpdate(prevProps){
    const { requestReservations, currentUser } = this.props;
    if (prevProps.currentUser != this.props.currentUser && currentUser){

      requestReservations(currentUser.id);
    }
  }

  loginDemoUser() {
    this.props.login({ email: "demo@ht.com", password: "fireball42" });
    document.querySelector(".sidenav").classList.remove("is-open");
  }

  render() {
    const { currentUser, reservations } = this.props;
    const reservation = reservations.find(res => res.status === "upcoming")
    const upcomingReservations = reservation ? (
      <div className="nav-reservation-details">
        <h1 id="reservation-nav-title" >
          <Link to={`/restaurants/${reservation.restaurant_id}`} target="_blank">
            {reservation.restaurant_name}
          </Link>
        </h1>
        <div className="reservation-item-details">
          <div className="reservation-date-time">
            <span>{reservation.date}</span>
            <span> at {new Date(reservation.time).toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true
            })}</span>
          </div>
          <div className="reservation-party-size">
            <span>Table for </span>
            <span>{reservation.party_size}</span>
            <span>{reservation.party_size > 1 ? " people" : " person"}</span>
          </div>
          <button id="reservation-nav-button"><Link to={`/reservations/${reservation.id}`}>Modify/View</Link></button>

        </div>

      </div>
    ) : (
    <div className="no-reservations">
      You have no upcoming reservations
    </div >
    )
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
              {upcomingReservations}
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
              <Link to="/my/profile">
                <li>
                  My Profile
                </li>
              </Link>
              <Link to="/my/reservations">
                <li>
                  <a href="#">My Dining History</a>
                </li>
              </Link>
              <Link to="/my/favorites">
                <li>
                  <a href="#">My Saved Restaurants</a>
                </li>
              </Link>
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
