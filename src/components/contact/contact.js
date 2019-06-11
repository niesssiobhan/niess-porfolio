import React from "react";

import '../../styles/base.scss';
import './contact.scss';

class Contact extends React.Component {

  render() {
    return (
      <>
        <section id="contact">
          <h2>Feel free to reach out to me!</h2>
          <p>I'd love to become a part of your team! I'm excited to keep growing and if you have any questions please connect with me!</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/siobhan-niess/" target="_blank" rel="noopener noreferrer"><img src={require('./assets/linkedin-logo')} alt="linkedin logo" /></a></li>
            <li><a href="https://github.com/niesssiobhan" target="_blank" rel="noopener noreferrer"><img src={require('./assets/github-logo')} alt="github logo" /></a></li>
            <li><a href="https://twitter.com/NiessSiobhan" target="_blank" rel="noopener noreferrer"><img src={require('./assets/twitter-logo')} alt="twitter logo" /></a></li>
            <li><a href="mailto:niesssiobhan@live.com" target="_blank" rel="noopener noreferrer"><img src={require('./assets/email-logo')} alt="email logo" /></a></li>
          </ul>
        </section>
      </>
    );
  }
}

export default Contact;