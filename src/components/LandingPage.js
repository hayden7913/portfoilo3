import React, { Component } from 'react';
import { withRouter } from  'react-router';
import Divider from './Divider';
import Hero from './Hero';
import Nav from './Nav';
import Portfolio from './Portfolio';


class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
    }
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
        <Nav areLinksHidden={areLinksHidden} currentRoute={pathname} onMenuClick={this.toggleNavLinks} />
        <Hero />
        <Divider />
        <div style={{height: "500px"}}></div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
