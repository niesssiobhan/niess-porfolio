import React from "react";

import '../../styles/base.scss';
import './header.scss';

class Header extends React.Component {

  render() {
    return (
      <>
        <section id="header">
          <h1>Siobhan Niess</h1>
          <nav>
            <ul>
              <div id="nav-bar">
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </div>
            </ul>
          </nav>
        </section>
      </>
    );
  }
}

export default Header;