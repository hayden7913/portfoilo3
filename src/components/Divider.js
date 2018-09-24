import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Divider({ alias, title, topBottom }) {
  return (
    <div className="divider-wrapper">
      {
        !topBottom === true
        ? <Element name={`divider-${alias}`} className={`divider divider-${alias}`}>
          <div className={`divider-line divider-line-${alias}`}></div>
          <div className="divider-title">{title}</div>
        </Element>
        : <Element name={`divider-${alias}`} className={`divider divider-top-bottom divider-${alias}`}>
          <div className="divider-title">{title}</div>
          <div className={`divider-line divider-line-${alias}`}></div>
        </Element>
      }
    </div>
  );
}
