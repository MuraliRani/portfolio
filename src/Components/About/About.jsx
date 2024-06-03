import "./About.css";
import profile_img from "../../assets/pic.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="https://www.google.com/"
          >
            Resume
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default About;
