import React from "react";

import "../../styles/base.scss";
import "./about.scss";

class About extends React.Component {
  render() {
    return (
      <>
        <section id="about">
          <img
            src={require("./siobhan.jpg")}
            alt="Siobhan and her beautiful little Teagan!"
          />
          <div id="content">
            <h2>I'm Glad You're Here!</h2>
            <p>
              To introduce myself, my name is Siobhan Niess and I am a Software
              Engineer. I was born and raised in the Seattle Area and absolute
              love the Pacific North West! As you can see, I am also a mother to
              a beautiful little girl, Teagan. When I am not plugged away coding
              and trying to learn something new, my family and I are outside
              enjoying this beautiful state we live in.
            </p>
            <p>
              As a Software Engineer, I honestly could not be more excited to be
              in this industry! I mean what is more thriling than being able to
              create something, anything, so incredible out of nothing! Being
              able to impact the world and the people around you with your own
              ideas is the enjoying and satisfaction that I am excited to work
              for in the years to come. I can't wait to find out what I don't
              know, and turn them into strengths!
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
