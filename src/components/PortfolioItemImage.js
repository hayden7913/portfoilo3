import React, { Component } from 'react';

export default function PortfolioItemImage({ demoUrl, imgSrc, alt }) {
  return (
    <div className="col6 col-screenshot">
      <a href={demoUrl}>
        <img className="portfolio-screenshot" src={imgSrc} alt={alt}/>
      </a>
    </div>
  );
}
