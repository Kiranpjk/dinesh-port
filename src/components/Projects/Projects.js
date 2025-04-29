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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bookstore}
              isBlog={false}
              title="Bookstore"
              description="A dynamic web application that allows users to browse, search, and purchase books online. Developed with a clean and intuitive interface using React.js for the frontend and Firebase (or Laravel—let me know if that’s the case) for backend functionalities like authentication, data storage, and order management. The platform supports real-time updates, shopping cart functionality, and secure user authentication."
              ghLink="https://github.com/eshwarbattuwar/OnlineBookStore"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="A full-featured online shopping platform developed to provide users with a seamless buying experience. Designed using React.js for the frontend and Laravel for the backend, the application offers a visually appealing interface, smooth navigation, and robust functionality. It includes product browsing, user authentication, cart management, order processing, and admin controls for inventory and order handling."
              ghLink="https://github.com/eshwarbattuwar/E-Commerce"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
