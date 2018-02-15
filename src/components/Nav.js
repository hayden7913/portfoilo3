import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Portfolio from './Portfolio';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <span className="nav-name">Hayden HarkWright</span>
        </div>
        <div className="nav-right">
          <Link to="/hello" className="nav-menu-item">About</Link>
          <Link to="/hello" className="nav-menu-item">Portfolio</Link>
          <Link to="/hello" className="nav-menu-item">Contact</Link>
        </div>
      </div>
    </nav>
  );
}