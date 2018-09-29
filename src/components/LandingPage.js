import React, { Component } from 'react';
import { withRouter } from  'react-router';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import About from './About';
import Hero from './Hero';
import Nav from './Nav';
import Portfolio from './Portfolio';


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
      scrollY: 0,
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', () => (
      this.setState({ windowWidth: window.innerWidth }, () => console.log(this.state.windowWidth))
    ));

    window.addEventListener('scroll', () => {
      this.setState({ scrollY: window.scrollY });
    });
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;

    setTimeout(() =>{
      this.setState({ areLinksHidden: !areLinksHidden});
    }, 0);
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
          windowWidth={this.state.windowWidth}
          toggleMenu={this.toggleNavLinks}
          isTop={scrollY === 0}
       />
        <Hero />
        <main>
          <Portfolio />
          <About />
          <div style={{height: '300px'}}></div>
        </main>
      </Element>
    );
  }
}

export default withRouter(LandingPage);
