import React from "react";

import "../../styles/base.scss";
import "./header.scss";
import Resume from "./assets/siobhanNiessResume.pdf";

class Header extends React.Component {
  render() {
    return (
      <>
        <nav>
          <section id="name">
            <h1>Siobhan Niess</h1>
            <h3>Software Engineer</h3>
          </section>
          <div class="nav">
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="#education">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
