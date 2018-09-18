import React, { Component } from 'react';
import { withRouter } from  'react-router';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import About from './About';
import Divider from './Divider';
import Hero from './Hero';
import Nav from './Nav';
import Portfolio from './Portfolio';


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ scrollY: window.scrollY });
    });
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;
    this.setState({ areLinksHidden: !areLinksHidden});
  }

  render() {
    const { areLinksHidden, scrollY } = this.state;
    const { pathname } = this.props.history.location;

    return (
      <Element name="home">
       <Nav
          areLinksHidden={areLinksHidden}
          currentRoute={pathname}
          onMenuClick={this.toggleNavLinks}
          isTop={scrollY === 0}
       />
        <Hero />
        <main>
          <Divider name="projects" title="projects" />
          <Portfolio />
          <Divider name="about-mobile" title="about me" />
          <About />
          <div style={{height: '300px'}}></div>
        </main>
      </Element>
    );
  }
}

export default withRouter(LandingPage);
