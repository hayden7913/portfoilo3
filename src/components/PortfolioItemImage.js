import React, { Component } from 'react';

export default function PortfolioItemImage({ alt, demoUrl, imgSrc, className }) {
  return (
    <div className={`col9 col-screenshot ${className || ''}`}>
      <a href={demoUrl}>
        <img className="portfolio-screenshot" src={imgSrc} alt={alt}/>
      </a>
    </div>
  );
}
