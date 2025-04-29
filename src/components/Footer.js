import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
  AiOutlineMail,
  AiFillPhone,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Dinesh</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Dinesh</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Dinesh41-dot"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:dineshbainapalli41@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dinesh-bainapalli"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="tel:+91 7032016664"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://www.instagram.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li> */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
