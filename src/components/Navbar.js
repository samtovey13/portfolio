import React from 'react';
import StyledNavbar from '../styled/Navbar';
import { StyledH1 } from '../styled/Headings';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
  return (
    <StyledNavbar className="navbar">
      <StyledH1>Sam Tovey, Developer</StyledH1>
      <div className="socials-links">
        <a href="https://github.com/samtovey13">
          <FaGithub />
        </a>
        <a href="https://twitter.com/SamTovey13">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/sam-tovey/">
          <FaLinkedin />
        </a>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;