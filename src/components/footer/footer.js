import React from "react";

import '../../styles/base.scss';
import './footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <>
        <section id="footer">
          <p>&copy; Siobhan Niess, Software Engineer 2019</p>
          <a href="https://github.com/niesssiobhan/niess-portfolio" target="_blank" rel="noopener noreferrer">View My Code</a>
        </section>
      </>
    );
  }
}

export default Footer;