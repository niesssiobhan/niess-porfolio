import React from "react";

import "../../styles/base.scss";
import "./education.scss";

class Education extends React.Component {
  render() {
    return (
      <>
        <section id="education">
          <h2>Certifications</h2>
          <div id="codeFellows">
            <img
              src={require("./assets/codeFellows.jpg")}
              alt="Code Fellows Certificiation"
            />
          </div>
          <div id="nodejs">
            <img
              src={require("./assets/nodeCourse.png")}
              alt="Node Course Certification"
            />
          </div>
        </section>
      </>
    );
  }
}

export default Education;
