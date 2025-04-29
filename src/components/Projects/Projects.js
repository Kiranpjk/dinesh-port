import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import CarRental from "../../Assets/Projects/CarRental.png";
import Bookstore from "../../Assets/Projects/Bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarRental}
              isBlog={false}
              title="Covid-19 Analysis-Shareable Dashboard"
              description="Created an interactive dashboard that tracks COVID-19 cases, providing real-time data visualization  
of confirmed cases, recoveries, and deaths across different regions.Utilized Tableau tools  including Data Interpreter, Data Blending and Calculated Fields. Implemented easy navigation through drop-down menus"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
