import React, { Component } from 'react';
import { withRouter } from  'react-router';
import Portfolio from './Portfolio';
import Nav from './Nav';
import Hero from './Hero';


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
        {/* <Nav areLinksHidden={areLinksHidden} currentRoute={pathname} onMenuClick={this.toggleNavLinks} /> */}
          <Hero />
          <div style={{height: "500px"}}></div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
