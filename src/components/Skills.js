import React from 'react';
import { StyledList } from "../styled/List";
import StyledPanel from '../styled/Panel';

const Skills = () => {
  return (
    <StyledPanel className="skills">
      <h2>Skills</h2>
      <p>*List of icons here*</p>
      <p>
        As a career-switcher I bring a lot more to coding than simply technical
        skills:
      </p>
      <StyledList>
        <li>
          <span>Customer service pro. </span> I understand the importance of
          looking after the client and working to a brief.
        </li>
        <li>
          <span>Experienced Retail Manager. </span> I've spent many years
          playing with databases to make life easier through automation and
          efficiency.
        </li>
        <li>
          <span>Background in the visual arts. </span> I can spot a
          well-styled website a mile off.
        </li>
      </StyledList>
    </StyledPanel>
  );
}

export default Skills;