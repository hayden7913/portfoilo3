import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ContactLinks from './ContactLinks';
import Projects from './Projects';

export default function Nav({
  areLinksHidden,
  isTop,
  onMenuClick,
  toggleMenu,
  windowWidth,
 }) {
  const navClass = classNames('nav', {
    'is-active': !areLinksHidden,
    'has-background': !isTop,
  });

  const navLeftClass = classNames('nav-left', {
    'is-visible': !areLinksHidden
  });

  const menuIconClass = classNames('nav-menu-icon', {
    'icon-menu': areLinksHidden,
    'icon-close': !areLinksHidden,
    'not-top': !isTop,
  });

  const menuItemClass = classNames('nav-menu-item', {
    'not-top': !isTop,
  });

  // const aboutLinkClass = classNames('nav-menu-item', {
  //   'is-active': currentRoute === '/',
  // });
  //
  // const projectLinkClass = classNames('nav-menu-item', {
  //   'is-active': currentRoute === '/project',
  // });
  //
  // const contactLinkClass = classNames('nav-menu-item', {
  //   'is-active': currentRoute === '/contact',
  // });

  return (
    <nav className={navClass}>
      <div className="nav-container">
        <div className={navLeftClass}>
          <Link
            className={menuItemClass}
            duration={500}
            onClick={toggleMenu}
            smooth
            spy
            to="home"
          >
            HOME
          </Link>
          <Link className={menuItemClass}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            smooth
            spy
            to="projects"
          >
            PROJECTS
          </Link>
          <Link className={menuItemClass}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            smooth
            spy
            to="about"
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-right">
          <ContactLinks alias="nav" isTop={isTop} />
          <span className={menuIconClass} onClick={onMenuClick}></span>
        </div>
      </div>
    </nav>
  );
}
