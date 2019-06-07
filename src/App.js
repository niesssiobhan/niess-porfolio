import React, {Component} from 'react';

import'./styles/base.scss';
import Header from './components/header.js';
import About from './components/about.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
    );
  }
}

export default App;