import React from "react";

import "../../styles/base.scss";
import "./portfolio.scss";

// import SpaceRover from "./assets/spaceRover.jpg";
// import BuzzCard from "./assets/buzzCard.png";
// import AtNote from "./assets/atNote.jpg";
// import PackingPlanner from "./assets/packingPlanner.png";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <section id="portfolio">
          <h2>Current Portfolio</h2>
          <section id="projects" />
          <h4>BuzzCard</h4>
          <container id="containerOne">
            <div id="imageOne">
              <img
                src={require("./assets/buzzCard.png")}
                alt="mobile application from Google Play store"
              />
            </div>
            <div id="contentOne">
              <p>
                <span>What it does: </span> BUZZCARD is a mobile application
                that is used for both personal and professional use. It allows
                users to have a digital profile for all of their social media
                accounts in one place. It allows the user to choose what
                accounts or ways of contact to share with others by simply
                generating a QR code that they will share.
              </p>
              <p class="tech">
                <span>Technology Invloved: </span>React Native - Redux - Expo
                App
              </p>
              <a
                href="https://github.com/401-final-project/front-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                class="secLink"
                href="https://play.google.com/store/apps/details?id=com.jaredpattison.BUZZCARD&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install BUZZCARD!
              </a>
            </div>
          </container>
          <h4>atnote</h4>
          <conatiner id="containerTwo">
            <div id="imageTwo">
              <img
                src={require("./assets/atNote.jpg")}
                alt="atnote npm package"
              />
            </div>
            <div id="contentTwo">
              <p>
                <span>What it does: </span>atnote is a npm package that was
                created to help users take notes while they are in their termial
                with ease. Allows users to multitask between note taking and
                writing code in a non-intrustive process. This is also
                customizable for each user.
              </p>
              <p class="tech">
                <span>Technology Invloved: </span>Node.js - npm - JavaScript -
                MongoDB
              </p>
              <a
                href="https://github.com/AtNote/AtNote"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                class="secLink"
                href="https://www.npmjs.com/package/atnote"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try atnote!
              </a>
            </div>
          </conatiner>
          <h4>Space Rover</h4>
          <container id="containerThree">
            <div id="imageThree">
              <img
                src={require("./assets/spaceRover.jpg")}
                alt="website image of Space Rover"
              />
            </div>
            <div id="contentThree">
              <p>
                <span>What it does: </span>Space Rover is a mobile-first,
                educational website about space. Users are able to select a
                planet or other celestial body with a selected date. From there
                they are able to learn how long it will take to get from that
                planet to another. Features include differevt units of
                measurment and a short list of assorted facts for each
                planet/celestial body.
              </p>
              <p class="tech">
                <span>Technology Invloved: </span>JavaScript- EJS - HTML - CSS -
                Node.js - Ephemeris API - NASA AoPD API - Heroku - SQL
              </p>
              <a
                href="https://github.com/hcherewaty/space_rover"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                class="secLink"
                href="http://www.spacerover.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out Space Rover!
              </a>
            </div>
          </container>
          <h4>Packing Planner</h4>
          <conatiner id="containerFour">
            <div id="imageFour">
              <img
                src={require("./assets/packingPlanner.png")}
                alt="image of a stage with in Packing Planner"
              />
            </div>
            <div id="contentFour">
              <p>
                <span>What it does: </span>Packing Planner is an application
                that was designed to help users pack for a trip or a vaction.
                Depending on the climate of your destination, Packing Planner
                helps suggest appropriate items that a user may need to bring
                with. Creating a check off list for users in hope that no 'must
                have' items are forgotten.
              </p>
              <p class="tech">
                <span>Technology Invloved: </span>JavaScript - HTML - CSS
              </p>
              <a
                href="https://github.com/niesssiobhan/packing-planner"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
              <a
                class="secLink"
                href="https://niesssiobhan.github.io/packing-planner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Packing!
              </a>
            </div>
          </conatiner>
        </section>
      </>
    );
  }
}

export default Portfolio;
