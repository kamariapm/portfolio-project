import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import bitmoji from "../img/bitmoji3.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={bitmoji} alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2>Kamaria Inman</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Full Stack Web Developer
              <br />
              <b>MERN Stack</b>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Atlanta, GA 30311</p>
            <h5>Phone</h5>
            <p>(404) 729-7574</p>
            <h5>Email</h5>
            <p>kamaria.inman@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Accenture"
              jobTitle="Application Developer"
              jobDescription="Assist in managing large IT project using Scrum framework for a large data migration/integration. Implementing Salesforce for adding or updating customer information on to the Informatica Master Data Management platform, utilizing Informatica as Master Data Management platform (replacing SAP ECC) and Salesforce on the front end"
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="City of Refuge"
              jobTitle="Full Stack Web Developer Apprentice"
              jobDescription="Create end-to-end web applications using MERN stack and other industry leading technologies. Update job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations "
            />

            <Experience
              startYear={2015}
              endYear={2017}
              jobName="Georgia State University"
              jobTitle="Academic Advisor"
              jobDescription="Served as initial Career Counselor for students in the Robinson College of Business to discuss applicable coursework and potential career paths, to ensure proper election of major. Modeled and queried data for special reports regarding enrollment and related matters to senior level management, using various advising systems and technologies.
              Monitored, tracked and increased student retention, academic progression and graduation rates using specialized systems in coordination with Excel for students in assigned population"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Education</h2>
            <Education
              startYear={2006}
              endYear={20011}
              schoolName="Georgia State University"
              schoolDescription="B.A. Psychology"
            />
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Interapt Skills"
              schoolDescription="Full Stack Web Development Bootcamp"
            />
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="IC Agile"
              schoolDescription="IC Agile Professional Certification"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Salesforce Platform App Builder" progress={50} />
            <Skills skill="JavaScript" progress={70} />
            <Skills skill="MongoDB" progress={60} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={55} />
            <Skills skill="Git" progress={75} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
