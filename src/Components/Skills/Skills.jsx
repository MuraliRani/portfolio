import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaBootstrap, FaReact, FaNodeJs} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
const Skills = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-skills">
            <div className="about-skill"><FaHtml5 className="icon html" /></div>
            <div className="about-skill"><FaCss3Alt className="icon css" /></div>
            <div className="about-skill"><FaBootstrap className="icon bootstrap" /></div>
            <div className="about-skill"><FaJsSquare className="icon javascript" /></div>
            <div className="about-skill"> <FaReact className="icon reactjs" /></div>
            <div className="about-skill"><FaNodeJs className="icon nodejs" /></div>
            <div className="about-skill"><SiExpress className="icon expressjs" /></div>
            <div className="about-skill"><SiMongodb className="icon mongodb" /></div>
            <div className="about-skill"> <FaJava className="icon java" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
