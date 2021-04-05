import React from 'react';
import { StyledFlexContainerHorizontal } from '../styled/FlexContainers';
import { StyledList } from "../styled/List";
import {StyledPanel} from '../styled/Panel';
import styled from 'styled-components';

const SkillsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (min-width: 600px) {
    flex-direction: row;
    > * {
      flex: 1 1 0;
    }
  }
`;


const Skills = () => {
  return (
    <>
      <StyledPanel className="skills" bg="#ffe66d">
        <div className="panel-inner">
          <h2>Skills</h2>
          <SkillsWrapper>
            <StyledFlexContainerHorizontal>
              <span>
                <h3>Frontend</h3>
                <StyledList>
                  <li>JavaScript ES6</li>
                  <li>React</li>
                  <li>HTML and CSS</li>
                  <li>Styled Components</li>
                </StyledList>
              </span>
              <span>
                <h3>Backend</h3>
                <StyledList>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Sequelize</li>
                  <li>MySQL</li>
                </StyledList>
              </span>
            </StyledFlexContainerHorizontal>
            <StyledFlexContainerHorizontal>
              <span>
                <h3>Testing</h3>
                <StyledList>
                  <li>Jest</li>
                  <li>Mocha</li>
                  <li>Chai</li>
                </StyledList>
              </span>
              <span>
                <h3>General</h3>
                <StyledList>
                  <li>Git</li>
                  <li>NPM</li>
                  <li>Docker</li>
                </StyledList>
              </span>
            </StyledFlexContainerHorizontal>
          </SkillsWrapper>
        </div>
      </StyledPanel>
      <StyledPanel>
        <div className="panel-inner">
          <p className="first-p">
            As a career-switcher I bring a lot more to coding than simply
            technical skills:
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
              <span>Background in the visual arts. </span> I love colour and 
              clean design.
            </li>
          </StyledList>
        </div>
      </StyledPanel>
    </>
  );
}

export default Skills;