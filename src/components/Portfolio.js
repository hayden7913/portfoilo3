import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import PortfolioItemDescription from './PortfolioItemDescription';
import PortfolioItemImage from './PortfolioItemImage';

export default function Portfolio() {
  return (
    <section className="portfolio-section" name="portfolio">
      <div className="row portfolio-row pcb-flow-row">
        <div className="portfolio-item" >
          <PortfolioItemImage
            alt="portfolio demo item"
            imgSrc="/images/pcb-flow-mockup-original.png"
            demoUrl="http://pcb-flow.herokuapp.com/"
          />
          <PortfolioItemDescription
            alias="pcb-flow"
            repoUrl="https://github.com/hayden7913/bread-pcb-tool"
            title="PCB Flow"
            techIcons={["react", "sass", "nodejs", "mongodb"]}
            description="A Drag and drop tool for designing electronic devices. Tailored specifically to make electronics design accessible and approachable for non-engineers."
          />
        </div>
      </div>
      <div className="row portfolio-row pomtracker-row">
        <div className="portfolio-item" >
          <PortfolioItemImage
            alt="portfolio demo item"
            className="pomtracker-mockup-sm-screen"
            imgSrc="/images/pomtracker-mockup.png"
            demoUrl="http://pomtracker.herokuapp.com/"
          />
          <PortfolioItemDescription
            alias="pomtracker"
            repoUrl="https://github.com/hayden7913/PomTracker-Capstone"
            title="Pomtracker"
            techIcons={["react", "sass", "nodejs", "mongodb"]}
            description="A pomodoro timer with integrated time tracking. I built this app with my own use in mind as I struggled to find exisiting tools for time tracking and the Pomodoro system that worked for me. I use this app every day to manage my pomodoro sessions and keep my weekly productivity goals on track."
          />
          <PortfolioItemImage
            alt="portfolio demo item"
            className="pomtracker-mockup-lg-screen"
            imgSrc="/images/pomtracker-mockup.png"
            demoUrl="http://pomtracker.herokuapp.com/"
          />
        </div>
      </div>
      <div className="row portfolio-row anki-assistant-row">
        <div className="portfolio-item" >
          <PortfolioItemImage
            alt="portfolio demo item"
            imgSrc="/images/anki-assistant-mockup.png"
            demoUrl="http://anki-assistant.herokuapp.com/"
          />
          <PortfolioItemDescription
            alias="anki-assistant"
            repoUrl="https://github.com/hayden7913/AnkiAssistant"
            title="AnkiAssistant"
            techIcons={["jquery", "sass"]}
            description="AnkiAssistant leverages the Globse language dictionary API to create a user interface that streamlines making custom Spanish language vocabulary flash card decks on Anki, the excellent spaced repitition based flash card platform."
          />
        </div>
      </div>
    </section>
  );
}
