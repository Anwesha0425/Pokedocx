// import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/avatar.jpg";
import {FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">HELLO</h1>
      <h2 className="profile-text">The is pokedex</h2>
      <div className="profile-links">
        <a href="https://github.com/Anwesha0425">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anwesha-rani-gouda-b54247259/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
