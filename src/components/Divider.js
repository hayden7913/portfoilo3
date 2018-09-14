import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Divider({ name, title }) {
  return (
    <Element name={name}>
      <div className={`divider divider-${name}`}>
        <div className={`divider-line divider-line-${name}`}></div>
        <span className="divider-title">{title}</span>
      </div>
    </Element>
  );
}
