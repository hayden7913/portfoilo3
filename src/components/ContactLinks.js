import React from 'react';

export default function ContactLinks({ className }) {
  return (
    <div className={`contact-links ${className}`}>
      <a className="contact-link icon-github" href="https://github.com/hayden7913"></a>
      <a
        className="contact-link icon-linkedin"
        href="https://www.linkedin.com/in/hayden-harkwright-2588b254"
      >
      </a>
      <a className="contact-link icon-mail" href="mailto:hayden321@gmail.com"></a>
    </div>
  );
}
