import React from "react";

import "../../styles/base.scss";
import "./header.scss";
import Resume from "./assets/siobhanNiessResume.pdf";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav>
          <h1>Siobhan Niess</h1>
          <ul>
            <div id="nav">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                Resume
                </a>
              </li>
              <li>
                <a href="#education">Certificatoins</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
