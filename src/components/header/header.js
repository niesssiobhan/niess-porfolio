import React from "react";

import "../../styles/base.scss";
import "./header.scss";
import Resume from "./assets/siobhanNiessResume.pdf";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li id="name">
              <a href="/">Siobhan Niess</a>
            </li>
          </ul>
          <ul>
            <div id="nav">
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                  resume
                </a>
              </li>
              <li>
                <a href="#education">certificatoins</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
