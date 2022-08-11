import React from 'react';
import "./About.css";
import code from "../../media/code.jpeg"



const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Tell you something about me</h3>
        <p>
          <strong>
            I am a Full Stack Developer, I am passionate about development, I am
            a 100% self-taught person, proactive and eager to develop my skills,
            I like to continue learning and of course put my best effort into
            each and every one of my projects! I use different languages,
            libraries and frameworks, HTML5, CSS3, JavaScript, Bootstrap,
            Tailwind, React js, Git, AWS, Adobe XD, etc...
          </strong>
        </p>
      </div>
      <div className="about-img">
        <img src={code} alt="about" />
      </div>
    </div>
  );
}

export default About;