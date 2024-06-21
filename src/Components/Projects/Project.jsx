import "./Project.css";
import Services_Data from "../../assets/services_data";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>Projects</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <div className="services-details">
                <img src={service.img_src} alt={service.s_name} />
                <div className="project-description">
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                  <p>{service.project_desc}</p>
                </div>
                <div className="project-links">
                  <div>
                    <a
                      href={service.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon github" />
                    </a>
                  </div>
                  {/* <a
                    href={service.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achor"
                  >
                    Live
                  </a> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
