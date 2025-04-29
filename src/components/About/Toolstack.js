import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiOracle,
  SiEclipseide,
  SiAnaconda,
  SiMongodb ,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
    </Row>
  );
}

export default Toolstack;
