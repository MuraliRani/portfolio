import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Skills = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am skilled in a variety of stacks essential for modern web
              development, including HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, and MongoDB. Additionally, my expertise extends to
              frameworks like Next.js, which enhances the performance and
              scalability of web applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML 5 & CSS</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "85%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "74%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1></h1>
          <p></p>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
