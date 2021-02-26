import React from "react";
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2>My Story</h2>
      <p>
        Flashback to the 90s, land of animated Powerpoints and rainbow-coloured
        WordArt. I built my first ever website for a school project. My baffled
        primary school teacher had never seen an HTML file before and tried to
        open it in Powerpoint, much to the amusement of my parents who were
        eventually called in to assist.
      </p>
      <p>
        Fast forward to Lockdown 2020, and an unexpected period of downtime gave
        me the chance to turn my hobby into a career.
      </p>
      <p>
        After countless evenings and weekends spent coding I am proud to have
        graduated from the Manchester Codes part time bootcamp.
      </p>
      <p>
        As a career-switcher I bring a lot more to coding than simply technical
        skills:
      </p>
      <ul className="ul-no-bullets">
        <li>
          <strong>Customer service pro</strong> =&gt; I understand the
          importance of looking after the client and working to a brief.
        </li>
        <li>
          <strong>Experienced Retail Manager</strong> =&gt; I've spent many
          years playing with databases to make life easier through automation
          and efficiency.
        </li>
        <li>
          <strong>Background in the visual arts</strong> =&gt; I can spot a well-styled website a
          mile off.
        </li>
      </ul>
    </div>
  );
};

export default About;
