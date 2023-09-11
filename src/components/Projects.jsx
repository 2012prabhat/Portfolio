import React from "react";
import pSnipp from "../images/pSnipp.jpeg";
import firebaseImg from "../images/firebase.png";
import cssImg from "../images/css.png";
import reactImg from "../images/react.png";

function Projects() {
  return (
    <section className="projects">
      <div className="head">My Projects/Work</div>
      <div className="proCont">
        <div className="projectData">
          <a href="https://psnipp.netlify.app/" className="projectCard">
            <div className="imgDiv">
              <a href="https://psnipp.netlify.app/">
                <img src={pSnipp} alt="" />
              </a>
            </div>
            <div className="nameDiv">PSnipp</div>
          </a>
          <div className="proDesc">
            <div>PSnipp: A Code Snippet Manager</div>
            <br />
            <div>
              Overview: Prabhat Snippets is a user-friendly web application
              designed to simplify the process of managing and storing your
              valuable code snippets. Whether you're a developer, designer, or
              hobbyist coder, Prabhat Snippets makes it effortless to register,
              log in securely, and organize your code pieces for easy access and
              future reference. Built with modern web technologies like
              React.js, CSS, and powered by Firebase for seamless data storage
              and authentication, Prabhat Snippets offers a sleek and efficient
              solution for your coding needs.
            </div>
            <br />
            <div>Key Features :-</div>

            <div className="featuresCont">
              <div>
                {" "}
                <li>User Registration and Authentication</li>
                <li>User-Friendly Interface</li>
                <li>Syntax Highlighting</li>
              </div>

              <div>
                <li>Search and Filtering</li>
                <li>Code Preview and Editing</li>
                <li>Backup and Sync</li>
              </div>
            </div>

            <br />
            <div className="techStack">
              <div>Tech Stack :- </div>
              <br />
              <div>
                <img src={reactImg} alt="react" />
                <img src={cssImg} alt="css" />
                <img src={firebaseImg} alt="firebase" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Projects;
