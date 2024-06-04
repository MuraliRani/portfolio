import "./About.css";
import profile_img from "../../assets/pic.jpg";

const About = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        Hi👋, <span>I'm Murali R</span> <br />
        MERN Developer
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
            href="https://drive.google.com/file/d/1vTM2Hy9Iy2EPy-c3ckKAXthybLgFam8A/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
