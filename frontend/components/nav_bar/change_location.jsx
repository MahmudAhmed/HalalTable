import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChangeLocation = () => {
  
  
  return (
  <div className="nav-bar-location">
    <section id="change-location" >
        <div>
          <FontAwesomeIcon icon="map-marker-alt" className="header-icon change-location-icon" />
        </div>
        <div>
          <FontAwesomeIcon icon="angle-down" className="header-icon change-location-icon dropdown-icon" />
        </div>
    </section>
    <span className="location-triangle"></span>
    <ul className="location">
      <div className="menu-sub-header">Choose Your City</div>
      <li>
        <div>All</div>
        <div>10XX</div>
      </li>
      <li>
        <div>Manhattan</div>
        <div>350</div>
      </li>
      <li>
        <div>Brooklyn</div>
        <div>380</div>
      </li>
      <li>
        <div>Queens</div>
        <div>340</div>
      </li>
      <li>
        <div>Bronx</div>
        <div>110</div>
      </li>
      <li>
        <div>Staten Island</div>
        <div>150</div>
      </li>

    </ul>
  </div>
)}

export default ChangeLocation;