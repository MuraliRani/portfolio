import "./Education.css";

const Education = () => {
  return (
    <section className="education section" id="work">
      <h1 className="section-title">Education</h1>
      <br />
      {/* <div className="education-container bd-grid">
        <div className="education-data">
          <div className="education-names">
            <span className="education-name">MERN Deeveloper</span>
            <p className="education-platform">
              Has successfully completed FullStack Development Course at GUVI
              GEEK NETWORK PRIVATE LIMITED
            </p>
            <p className="education-duration">December 2023- February 2024</p>
          </div>
        </div>
      </div> */}
      <br />
      <div className="education-container bd-grid">
        <div className="education-data">
          <div className="education-names">
            <span className="education-name">B.E(CSE)</span>
            <p className="education-platform">
              Muthayammal College of Engineering
            </p>
            <p className="education-duration">Jun 2019 - May 2023</p>
          </div>
        </div>
      </div>
      <br />
      <div className="education-container bd-grid">
        <div className="education-data">
          <div className="education-names">
            <p className="education-platform">Govt Higher Secondary School</p>
            <p className="education-duration">Jun 2018 - Apr 2019</p>
          </div>
        </div>
      </div>
      <br />
     
    </section>
  );
};

export default Education;
