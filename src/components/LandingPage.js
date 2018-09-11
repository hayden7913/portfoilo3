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
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      // const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(window.scrollY);
      // console.log(scroll);
    });
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;
    this.setState({ areLinksHidden: !areLinksHidden});
  }

  render() {
    const { areLinksHidden } = this.state;
    const { pathname } = this.props.history.location;

    return (
      <div>
       <Nav
         areLinksHidden={areLinksHidden}
         currentRoute={pathname}
         onMenuClick={this.toggleNavLinks}
         scrollTo={this.scroll}
       />
        <Hero />
        <Divider name="projects" title="projects" />
        <Portfolio />
        <Divider name="about" title="about me" />
        <About />
      </div>
    );
  }
}

export default withRouter(LandingPage);
