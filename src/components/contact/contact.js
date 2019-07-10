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
          <container className="logos">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/siobhan-niess/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="linkedin"
                    src={require("./assets/linkedin-logo.png")}
                    alt="linkedin logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/niesssiobhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="github"
                    src={require("./assets/github-logo.png")}
                    alt="github logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/NiessSiobhan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="twitter"
                    src={require("./assets/twitter-logo.png")}
                    alt="twitter logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:niesssiobhan@live.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="email"
                    src={require("./assets/email-logo.png")}
                    alt="email logo"
                  />
                </a>
              </li>
            </ul>
          </container>
        </section>
      </>
    );
  }
}

export default Contact;
