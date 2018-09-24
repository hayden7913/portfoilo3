import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Divider({ alias, name, title, topBottom }) {
  return (
    <div className="divider-wrapper">
      <Element name={`divider-${name}`} />
      {
        !topBottom === true
        ? <div  className={`divider divider-${alias}`}>
            <div className={`divider-line divider-line-${alias}`}></div>
            <div className={`divider-title divider-title-${alias}`}>{title}</div>
          </div>
        : <div  className={`divider divider-top-bottom divider-${alias}`}>
            <div className={`divider-title divider-title-${alias}`}>{title}</div>
            <div className={`divider-line divider-line-${alias}`}></div>
          </div>
      }
    </div>
  );
}
