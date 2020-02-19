import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Footer = () => {


  return (
    <footer id="footer">
      <p>Mahmud Ahmed</p>
      <div className="footer-icons-container">
        <div>
          <a
            style={{ display: "table-cell" }}
            href="https://www.linkedin.com/in/mahmud-ahmed/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              color="white"
              className="footer-icon"
            />
          </a>
        </div>
        <div>
          <a
            style={{ display: "table-cell" }}
            href="https://github.com/mahmudahmed"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "github-square"]}
              color="white"
              className="footer-icon"
            />
          </a>
        </div>
        <div>
          <a
            style={{ display: "table-cell" }}
            href="https://medium.com/@moe.purplefox"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "medium"]}
              color="white"
              className="footer-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}