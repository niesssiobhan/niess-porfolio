import React from "react";

import '../../styles/base.scss';
import './about.scss';

class About extends React.Component {

  render() {
    return (
      <>
        <section id="about">
        <img src={require('./siobhan.jpg')} alt="Siobhan and her beautiful little Teagan!" />
        <div id="content">
          <h2>I'm Glad You're Here!</h2>
          <p>This is where I'm going to be talking about myself and there will be a small introduction about me</p>
        </div>
        </section>
      </>
    );
  }
}

export default About;