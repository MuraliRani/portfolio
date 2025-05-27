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
        Detail-oriented Software Engineer with 1.6+ years of experience in
        building high-performance web applications. Skilled in problem-solving,
        fast learning, and team collaboration. Focused on writing clean,
        maintainable code and driving continuous improvement. Seeking to
        contribute to impactful, innovative projects in a full-time role.
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
            href="https://drive.google.com/file/d/1RCO8PRDhHv44Yt61Vt6B7p8aeI0aZyFv/view"
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
