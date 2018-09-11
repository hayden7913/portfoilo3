import React, { Component } from 'react';

export default function About() {
  return (
      <section className="about-section">
        <img className="about-image" src="/images/rock-hand-circle.png" alt="climbing photo"/>
        <p className="about-paragraph">
          I take great joy in finding ways to use programming to make life less tedious and more fun.
          I also earnestly look forward to putting web software to use to make meaningful improvements in the qulaity of other's lives and ending suffering in the world.
          Aside from my true obsession with coding, I'm also into rock climbing, meditation, and sipping on tasty microbrews.
        </p>
        <span className="about-contact-wrapper">
          <span className="about-contact-message">Shoot me an email</span>
          <a className="about-contact-link link" href="mailto:hayden321@gmail.com">hayden321@gmail.com</a>
        </span>
        <div className="contact">
          <div className="contact-social-media-links">
            <a className="contact-social-media-link icon-github" href="https://github.com/hayden7913"></a>
            <a
              className="contact-social-media-link icon-linkedin"
              href="https://www.linkedin.com/in/hayden-harkwright-2588b254"
            >
            </a>
            <a className="contact-social-media-link icon-mail" href="mailto:hayden321@gmail.com"></a>
          </div>
        </div>
      </section>
  );
}
