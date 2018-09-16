import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Portfolio from './Portfolio';
import PortfolioItemDescription from './PortfolioItemDescription';
import PortfolioItemImage from './PortfolioItemImage';
import Routes from '../routes';


export default function PortfolioItem({
  alt,
  className,
  demoUrl,
  imgSrc,
  itemName,
  portfolioItem,
  repoUrl,
  title,
  titleColor,
  description,
  techIcons,
}) {

  return (
    <div className="row portfolio-row">
      <div className="portfolio-item" >
        <PortfolioItemImage
            demoUrl={demoUrl}
            imgSrc={imgSrc}
            alt={alt}
        />
        <PortfolioItemDescription
          demoUrl={demoUrl}
          description={description}
          itemName={itemName}
          repoUrl={repoUrl}
          techIcons={techIcons}
          title={title}
         />
      </div>
    </div>
  );
}
