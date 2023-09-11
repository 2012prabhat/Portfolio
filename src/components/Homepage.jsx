import React from "react";
import profilePic from "../images/pic.png"

function Homepage() {
  return (
    <section className="home">
      <div className="name" data-aos="fade-right">Prabhat Kumar</div>
      <div className="middle">
        <div className="left">
          <div className="post" data-aos="fade-in">
            Web <br /> Developer
          </div>
          <div className="afterPost" data-aos="fade-right">
            I like to craft solid and scalable products with great user
            experiences.
          </div>
        </div>
        <div className="right">
            <div className="imgCont" data-aos="zoom-in">
            <img src={profilePic} alt=""/>
            
            </div>
       
        </div>
        
      </div>
      <div className="bottomText" data-aos="fade-left">
        Highly skilled in HTML, CSS, Javascript and React JS.
        </div>
    </section>
  );
}

export default Homepage;
