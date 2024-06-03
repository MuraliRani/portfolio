import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Project";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
