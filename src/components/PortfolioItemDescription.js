import React, { Component } from 'react';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const renderTechIcons = techIcons => (
  techIcons.map(iconClassName => (
    <span
      className={`portfolio-tech-icon tech-icon-${iconClassName} tooltip`}
      data-tooltip={capitalize(iconClassName)}
    >
    </span>)
  )
);

export default function PortfolioItemDescription({
  demoUrl,
  description,
  alias,
  repoUrl,
  techIcons,
  title,
}) {

  return (
    <div className="col3 col-description">
      <div className={`portfolio-description-wrapper ${alias}-description-wrapper`}>
        <a className={`portfolio-title theme-color-${alias}`} href={demoUrl}>
          <h1 className="portfolio-title-text">{title}</h1>
          <div className="portfolio-title-divider"></div>
        </a>
        <p className="portfolio-description">{description}</p>
        <div className="portfolio-tech-icons">
          {renderTechIcons(techIcons)}
        </div>
        <a className="portfolio-link" href={repoUrl}>Repo</a>
        <span className={`theme-color-${alias}`}> | </span>
        <a className="portfolio-link" href={demoUrl}>Demo</a>
      </div>
    </div>
  );
}
