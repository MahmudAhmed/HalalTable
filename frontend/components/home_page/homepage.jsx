import React from "react";
import TopCusinines from "./top_cuisines_index";
import Splash from "./spash";
import Boroughs from "./boroughs";


class HomePage extends React.Component{

  render(){
    return (
      <>
      <Splash />
      <main id="homepage-container">
        <div id="homepage-content">
          <section className="top-cuisines-container">
            <div className="home-subheaders">
              <h2>Top Cuisines in New York City</h2>
            </div>
            <TopCusinines />
          </section>
            <section className="top-cities-container">
              <div className="home-subheaders">
                <h2>Dine By Boroughs</h2>
              </div>
              <Boroughs />
            </section>
        </div>
      </main>
      </>
    )
  }
}

export default HomePage;
