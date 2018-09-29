import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectItemDescription from './ProjectItemDescription';
import ProjectItemImage from './ProjectItemImage';
import Routes from '../routes';


export default function ProjectItem({
  alt,
  className,
  demoUrl,
  imgSrc,
  alias,
  projectItem,
  repoUrl,
  title,
  titleColor,
  description,
  techIcons,
}) {

  return (
    <div className="row project-row">
      <div className="project-item" >
        <ProjectItemImage
            demoUrl={demoUrl}
            imgSrc={imgSrc}
            alt={alt}
        />
        <ProjectItemDescription
          demoUrl={demoUrl}
          description={description}
          alias={alias}
          repoUrl={repoUrl}
          techIcons={techIcons}
          title={title}
         />
      </div>
    </div>
  );
}
