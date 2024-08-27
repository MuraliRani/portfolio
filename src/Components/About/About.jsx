import "./About.css";
import profile_img from "../../assets/pic.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
const About = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        Hi👋 <span>I'm Murali R</span> <br />
        <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 py-4 pl-2"
            strings={[
              "MERN Developer",
              "Frontend Developer",
              "Backend Developer",
              "Fullstack Developer",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
      </h1>
      <p>
        As a MERN stack graduate, I am skilled in web development and dedicated
        to continuous learning. I excel in creating dynamic web applications
        using MongoDB, Express.js, React.js, and Node.js, and am committed to
        contributing to innovative projects.
      </p>
      <div className="hero-action">
        {/* <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div> */}
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="https://drive.google.com/file/d/1G6FiU0efQB2yNZBMfbig25NJv42MN5hq/view?usp=sharing"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div>
          <a
            href="https://github.com/MuraliRani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon github" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/murali-r-535653297/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
