import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/avatar1.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Data Science Enthusiast</b> currently pursuing my B.Tech in Computer Science and Engineering.
              <br />
              <br />
              I am proficient in programming languages such as{" "}
              <i>
                <b className="purple">C++, R, and Python</b>
              </i>, and I enjoy building scalable and efficient Data visulazation.
              <br />
              <br />
              My primary areas of interest lie in developing innovative{" "}
              <i>
                <b className="purple">Data Analysis</b>
              </i>.
              <br />
              <br />
              I specialize in Data Science, leveraging{" "}
              <b className="purple">R</b> and{" "}
              <i>
                <b className="purple">modern JavaScript libraries and frameworks</b>
              </i>{" "}
              like <b className="purple">Tableua</b> to create responsive and high-performance applications.
            </p>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
