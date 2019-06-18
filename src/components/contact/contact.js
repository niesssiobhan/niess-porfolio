import React from "react";

import "../../styles/base.scss";
import "./contact.scss";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section id="contact">
          <h2>Feel free to reach out to me!</h2>
          <p>
            I'd love to become a part of your team! I'm excited to keep growing
            and if you have any questions please connect with me!
          </p>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/siobhan-niess/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="linkedin">
                  <img
                    src={require("./assets/linkedin-logo.png")}
                    alt="linkedin logo"
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/niesssiobhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="github">
                  <img
                    src={require("./assets/github-logo.png")}
                    alt="github logo"
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NiessSiobhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="twitter">
                  <img
                    src={require("./assets/twitter-logo.png")}
                    alt="twitter logo"
                  />
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:niesssiobhan@live.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id="email">
                  <img
                    src={require("./assets/email-logo.png")}
                    alt="email logo"
                  />
                </div>
              </a>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default Contact;
