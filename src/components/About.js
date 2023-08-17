import React from "react";

function About(props) {
  return (
    <div id="about">
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.github && <a href={props.github}>GitHub</a>}
      {props.linkedin && <a href={props.linkedin}>LinkedIn</a>}
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
