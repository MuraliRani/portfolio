import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";

const Project = () => {
  return (
    <div id="services" className="services">
      <div className="title-box">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
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
                  <a
                    href="https://task-management-app-redux.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Live
                  </a>
                  <a
                    href="	https://github.com/MuraliRani/Frontend.git"
                    target="_blank"
                    rel="noopener noreferrer" className="achor"
                  >
                  Github
              
                  </a>
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
