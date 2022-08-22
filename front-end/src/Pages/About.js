import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <h1>Snack-A-Log Project</h1>
      <h3>App Creators</h3>
      <img
        className="taryne-photo"
        src="taryne.png"
        alt="Taryne Leach Gonzalez"
      ></img>
      <br></br>
      <h4 className="bio-name">
        <em>Taryne Leach Gonzalez</em>
      </h4>
      <p className="bio-text">
        {" "}
        I am a full-stack web developer with a background in retail/ customer
        service from Brooklyn, NY. For this project, I focused on the front-end
        functionality and design. Some of my favorite snacks are chocolate chip
        cookies and Häagen-Dazs ice cream. If you would like to connect with me,
        please check out my links below!
      </p>
      <a href="https://github.com/TaryneLeach">
        <img
          className="icon"
          alt="GitHub"
          title="GitHub"
          src="./icons/github.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/taryne-leachgonzalez/">
        <img
          className="icon"
          alt="LinkedIn"
          title="LinkedIn"
          src="./icons/linkedin.png"
        />
      </a>
      <br></br>
      <br></br>
      <img
        className="jonathan-photo"
        src="jonathan.png"
        alt="Jonathan Scheiber"
      ></img>
      <br></br>
      <h4 className="bio-name">
        <em>Jonathan Scheiber</em>
      </h4>
      <p className="bio-text">
        I am a full-stack web developer with a background in IT and customer
        service from New York, NY. My interests include user experience (UX)
        design, cybersecurity, and accessibility. For this project, I focused on
        the back-end functionality. My favorite snacks are Reese’s peanut butter
        cups, Funyuns, and Ben & Jerry’s Americone Dream. If you would like to
        connect with me, please check out my links below!
      </p>
      <a href="https://github.com/Scheiber">
        <img
          className="icon"
          alt="GitHub"
          title="GitHub"
          src="./icons/github.png"
        />
      </a>
      <a href="https://www.linkedin.com/in/jonscheiber/">
        <img
          className="icon"
          alt="LinkedIn"
          title="LinkedIn"
          src="./icons/linkedin.png"
        />
      </a>
    </div>
  );
};

export default About;
