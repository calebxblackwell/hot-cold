import React from 'react';
import './info-section.css';

export default function InfoSection(props) {
  return (
    <section id="what" tabIndex="-1">
      <h2>So what is this?</h2>
      <p>This is Hot or Cold. The game goes like this:</p>
      <ol>
        <li>I pick a <strong>random number</strong> between 1 to 100 and keep it hidden.</li>
        <li>You need to <strong>guess</strong> until you can figure it out.</li>
        <li>I will <strong>tell you feedback</strong> how ("hot") or ("cold") your guess is.</li>
      </ol>
      <p>If you are using a screen reader, you can use the visually hidden "Hear state of game" link in the navigation region to get the same info.</p>
    </section>
  );
}
