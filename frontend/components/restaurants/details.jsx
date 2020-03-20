import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantMap from "../map/restaurant_map";


class Details extends React.Component {
  render() {
    const { restaurant } = this.props;
    return (
      <section className="details-container">
        <div className="left-details">
          <section>
            <FontAwesomeIcon
              icon="utensils"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Cuisines</h4>
              <p>Steak</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon="sign-language"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Dining style</h4>
              <p>Fine Dining</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon="tshirt"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Dress code</h4>
              <p>Business Casual</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon="subway"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Public transit</h4>
              <p>Public transportation within one block.</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon={["far", "credit-card"]}
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Payment options</h4>
              <p>AMEX, Discover, MasterCard, Visa</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon="external-link-alt"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Website</h4>
              <p>url</p>
            </div>
          </section>
          <section>
            <FontAwesomeIcon
              icon="phone-alt"
              className="right-side-details-icon"
            />
            <div>
              <h4 className="right-side-header">Phone number</h4>
              <p>(201) 313-9463</p>
            </div>
          </section>

        </div>
        <div className="right-details">
          <div id="sidebar-map" className="details-map">
            <RestaurantMap restaurant={restaurant} />
          </div>
            <section>
              <FontAwesomeIcon
                icon={["far", "building"]}
                className="right-side-details-icon"
              />
              <div>
                <h4 className="right-side-header">Neighborhood</h4>
                <p>Edgewater</p>
              </div>
            </section>
            <section>
              <FontAwesomeIcon
                icon={["far", "clock"]}
                className="right-side-details-icon"
              />
              <div>
                <h4 className="right-side-header">Hours of operation</h4>
                <p>Mon-Sun</p>
                <p>7:00 am - 11:00 pm</p>
              </div>
            </section>

        </div>
      </section>
    );
  }
}

export default Details;