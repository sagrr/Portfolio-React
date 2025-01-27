import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import image from "../../assets/sagar.jpeg";
// import profile from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a passionate Full-Stack and Android Developer with a strong
              foundation in building dynamic and user-friendly applications.
              With experience in both front-end and back-end development.
            </p>
            <p>
              I enjoy creating seamless digital experiences, My expertise spans
              JavaScript, Python, and modern frameworks, complemented by
              hands-on Android development skills.
            </p>
          </div>
          <div className="about-skills">
            <h1>Technical Skills</h1>
            <div className="about-skill">
              <p>Frontend - JavaScript, React js, CSS, HTML, TypeScript</p>
            </div>
            <div className="about-skill">
              <p>Backend - Node js, Express js, TypeScript</p>
            </div>
            <div className="about-skill">
              <p>Version Control - Git and GitHub</p>
            </div>
            <div className="about-skill">
              <p>Database - MySQL, Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div> */}
    </div>
  );
};
export default About;
