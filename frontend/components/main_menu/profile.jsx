import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";

const Profile = (props) => {
  debugger
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
      <main className="profile-main-container">
        <section className="profile-main-section">
          <div>
            <label>First Name:</label>
            <span>{props.user.first_name}</span>
          </div>
          <div>
            <label>Last Name:</label>
            <span>{props.user.last_name}</span>
          </div>
          <div>
            <label>Email:</label>
            <span>{props.user.email}</span>
          </div>
          <div>
            <label>Location:</label>
            <span>{props.user.primary_location}</span>
          </div>
        </section>
        <section>
          <div className="profile-pic" id="profile-pic" style={{ backgroundColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')' }}>
            <div className="profile-pic-initial">{props.user.first_name[0] + props.user.last_name[0]}</div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profile;
