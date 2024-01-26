import React from "react";
import pSnipp from "../images/pSnipp.jpeg";
import musicX from "../images/musicX.jpg"
import firebaseImg from "../images/firebase.png";
import cssImg from "../images/css.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/node.png"
import ProjectData from "./ProjectData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Projects() {
  return (
    <section className="projects">
      <div className="head">My Projects/Work</div>
      <div className="proCont">
        {/* <div className="projectData">
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
        </div> */}

       


<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <ProjectData 
        demo="https://psnipp.netlify.app/"
        proImg={pSnipp}
        proName="PSnipp"
        heading = "A Code Snippet Manager"
        overview="Prabhat Snippets is a user-friendly web application
        designed to simplify the process of managing and storing your
        valuable code snippets. Whether you're a developer, designer, or
        hobbyist coder, Prabhat Snippets makes it effortless to register,
        log in securely, and organize your code pieces for easy access and
        future reference. Built with modern web technologies like
        React.js, CSS, and powered by Firebase for seamless data storage
        and authentication, Prabhat Snippets offers a sleek and efficient
        solution for your coding needs."
        features={["User Registration and Authentication",
        "User-Friendly Interface",
        "Syntax Highlighting",
        "Search and Filtering",
        "Code Preview and Editing",
        "Backup and Sync"]}
        techStack={[reactImg,cssImg,firebaseImg]}

        />
      </SwiperSlide>
      <SwiperSlide>
      <ProjectData 
        demo=""
        proImg={musicX}
        proName="MusicX"
        heading = "A Music Streaming Website"
        overview="Elevate your music experience. Discover diverse genres, enjoy a sleek interface, and receive smart, personalized recommendations. Stream premium quality audio anytime, anywhere. Connect with a vibrant community, access exclusive content, and shape your unique musical journey. Your playlist, your rules. MusicX – Where Innovation Meets Melody."
        features={[
          "Diverse Music Catalog",
          "Intuitive Interface",
          "Smart Recommendations",
          "Uninterrupted Streaming",
          "Community Engagement",
          "Exclusive Content",
          "Customization Options",
          "Premium Audio Quality"
        ]}
        techStack={[reactImg,cssImg,nodeImg]}

        />
      </SwiperSlide>
    </Swiper>
        
      </div>
    </section>
  );
}

export default Projects;
