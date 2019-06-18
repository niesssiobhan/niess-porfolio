import React from "react";

import Node from "./assets/nodeCourse.png";
import CF from "./assets/codeFellows.jpg";

class Education extends React.Component {
  render() {
    return (
      <>
      <section id="education">
        <h2>Certifications</h2>
        <img src={require("./assets/codeFellows.jpg")} alt="Code Fellows Certificiation"/>
        <img src={require("./assets/nodeCourse.png")} alt="Node Course Certification"/>
      </section>
      </>
    );
  }
}

export default Education;