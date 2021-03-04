import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import StyledMain from "../styled/MainContent";
import StyledApp from "../styled/App";

function App() {
  return (
    <StyledApp className="app">
      <Navbar />
      <StyledMain>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </StyledMain>
    </StyledApp>
  );
}

export default App;
