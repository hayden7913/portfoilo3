import React, { Component } from 'react';

export default function Divider({ name, title }) {
  return (
    <div className="divider">
      <div className={`divider-line divider-line-${name}`}></div>
      <span className="divider-title">{title}</span>
    </div>
  );
}
