import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Divider({ name, title, topBottom }) {
  return (
    !topBottom === true
    ? <Element name={name}>
      <div className={`divider divider-${name}`}>
        <div className={`divider-line divider-line-${name}`}></div>
        <div className="divider-title">{title}</div>
      </div>
    </Element>
    : <Element name={name}>
      <div className={`divider divider-top-bottom divider-${name}`}>
        <div className="divider-title">{title}</div>
        <div className={`divider-line divider-line-${name}`}></div>
      </div>
    </Element>
  );
}
