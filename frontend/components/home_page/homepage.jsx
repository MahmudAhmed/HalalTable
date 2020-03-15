import React from "react";
import TopCusinines from "./top_cuisines_index";
import Splash from "./spash";

class HomePage extends React.Component{


  render(){
    return (
      <>
      <Splash />
      <main id="homepage-container">
        <div id="homepage-content">
          <section className="top-cuisines-container">
            <div className="home-subheaders">
              <h2>Top Cuisines in the 5 Boroughs</h2>
            </div>
            <TopCusinines />
          </section>
        </div>
      </main>
      </>
    )
  }
}

export default HomePage;
