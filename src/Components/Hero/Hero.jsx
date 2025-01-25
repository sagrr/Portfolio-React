import React from "react";
import "./Hero.css";
import profile from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from "../../assets/SagarResume.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      {/* <img src={profile} alt="" /> */}
      <h1>
        <span>I'm Sagar Bhardwaj,</span> MERN Stack Developer.
      </h1>
      <p>I am a Full Stack developer from India</p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        {/* <div className="hero-resume">My resume</div> */}
        <a href={Resume} target="_blank" className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};
export default Hero;
