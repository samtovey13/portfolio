import React from "react";
import StyledAnchor from "../styled/Anchor";
import { StyledList } from '../styled/List';
import {StyledPanel} from "../styled/Panel";
import { FiArrowDown } from "react-icons/fi";


const About = () => {
  return (
    <>
      <StyledPanel className="about" bg="#DD6E42" col="#FFFFFF">
        <div className="panel-inner">
          <h2>My Story</h2>
          <p className="first-p">Hello. I'm Sam and I'm a Web Developer based in Edinburgh, UK.</p>
          <p>
            In 2020 I decided to turn my hobby into a career and enrolled on a
            part time bootcamp with Manchester Codes. In the past year I've
            packed a lot of learning into my evenings and weekends, and I am now
            seeking a junior role in a supportive company where I can continue
            learning from some of the best professionals in the industry.
          </p>
          <StyledAnchor href="#projects">Skip to Projects
          <FiArrowDown />
          </StyledAnchor>
        </div>
      </StyledPanel>
      <StyledPanel>
        <div className="panel-inner">
          <h2>Things I enjoy:</h2>
          <StyledList>
            <li>
              <span>Efficiency. </span>I get huge satisfaction from streamlining
              and simplifying procedures, helping others to achieve more with
              fewer resources.
            </li>
            <li>
              <span>A good challenge. </span>Preferably accompanied by a strong
              coffee and someone to bounce ideas off.
            </li>
            <li>
              <span>Learning on the job. </span>I learn by doing, and I'm always
              on the lookout for a new favourite tool to make life easier (right
              now it's Styled Components!)
            </li>
          </StyledList>
        </div>
      </StyledPanel>
    </>
  );
};

export default About;
