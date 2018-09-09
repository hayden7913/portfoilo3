import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

export default function Portfolio() {
  return (
    <div className="portfolio-list">
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/images/pcb-flow-mockup.png"
        itemName="pcb-flow"
        demoUrl="http://pcb-flow.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/bread-pcb-tool"
        title="PCB Flow"
        techIcons={["react", "sass", "nodejs", "mongodb"]}
        description="A Drag and drop tool for designing electronic devices. Designed specifically to make electronics design accessible and approachable for non-engineers."
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/images/pomtracker-mockup.png"
        itemName="pomtracker"
        demoUrl="http://pomtracker.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/PomTracker-Capstone"
        title="Pomtracker"
        techIcons={["react", "sass", "nodejs", "mongodb"]}
        description="A pomodoro timer with integrated time tracking. I built this app with my own use in mind as I struggled to find exisiting tools for time tracking and the Pomodoro system that worked for me. I use this app every day to manage my pomodoro sessions and keep my weekly productivity goals on track."
      />
      <PortfolioItem
        alt="portfolio demo item"
        imgSrc="/images/laptop-anki-assistant.png"
        itemName="anki-assistant"
        demoUrl="http://anki-assistant.herokuapp.com/"
        repoUrl="https://github.com/hayden7913/AnkiAssistant"
        title="AnkiAssistant"
        techIcons={["jquery", "sass"]}
        description="AnkiAssistant leverages the Globse language dictionary API to create a user interface that streamlines making custom Spanish language vocabulary flash card decks on Anki, the excellent spaced repitition based flash card platform."
      />
    </div>
  );
}
