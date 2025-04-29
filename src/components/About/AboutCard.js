// import React from "react";
// import Card from "react-bootstrap/Card";
// import { Row, Col } from "react-bootstrap";
// import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

// function EducationCard() {
//   return (
//     <Card className="quote-card-view" style={{ marginBottom: "30px" }}>
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             <span className="purple">Education Journey</span>
//             <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
//               <Col xs={12} md={4} className="tech-icons">
//                 <FaGraduationCap />
//                 <h5 style={{ marginTop: "15px" }}>B.Tech CSE</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   Ongoing (3rd Year)
//                 </p>
//               </Col>
//               <Col xs={12} md={4} className="tech-icons">
//                 <FaSchool />
//                 <h5 style={{ marginTop: "15px" }}>Intermediate</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   MPC Stream
//                 </p>
//               </Col>
//               <Col xs={12} md={4} className="tech-icons">
//                 <FaBook />
//                 <h5 style={{ marginTop: "15px" }}>SSC</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   Secondary Education
//                 </p>
//               </Col>
//             </Row>
//           </p>

//           <p style={{ color: "rgb(155 126 172)", marginTop: "30px" }}>
//             "Strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer" style={{ color: "#9a7eb0" }}>
//             Battuwar Eshwar
//           </footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default EducationCard;




// import React from "react";
// import Card from "react-bootstrap/Card";
// import { Row, Col } from "react-bootstrap";
// import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

// function EducationCard() {
//   return (
//     <Card className="quote-card-view" style={{ marginBottom: "30px" }}>
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "center" }}>
//             <span className="purple">Education Journey</span>
//           </p>
          
//           <Row style={{ 
//             justifyContent: "space-around",
//             alignItems: "center",
//             padding: "20px 0",
//             flexWrap: "nowrap" // Ensures items stay in one row
//           }}>
//             {/* B.Tech */}
//             <Col className="tech-icons" style={{ 
//               minWidth: "30%",
//               padding: "15px",
//               border: "1px solid rgba(154, 126, 176, 0.2)",
//               borderRadius: "10px",
//               margin: "0 5px"
//             }}>
//               <div style={{ textAlign: "center" }}>
//                 <FaGraduationCap style={{ color: "#9a7eb0", fontSize: "2rem" }} />
//                 <h5 style={{ marginTop: "15px" }}>B.Tech CSE</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   Ongoing (3rd Year)
//                 </p>
//               </div>
//             </Col>

//             {/* Intermediate */}
//             <Col className="tech-icons" style={{ 
//               minWidth: "30%",
//               padding: "15px",
//               border: "1px solid rgba(154, 126, 176, 0.2)",
//               borderRadius: "10px",
//               margin: "0 5px"
//             }}>
//               <div style={{ textAlign: "center" }}>
//                 <FaSchool style={{ color: "#9a7eb0", fontSize: "2rem" }} />
//                 <h5 style={{ marginTop: "15px" }}>Intermediate</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   MPC Stream
//                 </p>
//               </div>
//             </Col>

//             {/* SSC */}
//             <Col className="tech-icons" style={{ 
//               minWidth: "30%",
//               padding: "15px",
//               border: "1px solid rgba(154, 126, 176, 0.2)",
//               borderRadius: "10px",
//               margin: "0 5px"
//             }}>
//               <div style={{ textAlign: "center" }}>
//                 <FaBook style={{ color: "#9a7eb0", fontSize: "2rem" }} />
//                 <h5 style={{ marginTop: "15px" }}>SSC</h5>
//                 <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
//                   Secondary Education
//                 </p>
//               </div>
//             </Col>
//           </Row>

//           <p style={{ 
//             color: "rgb(155 126 172)", 
//             marginTop: "30px",
//             textAlign: "center"
//           }}>
//             "Strive to build things that make a difference!"
//           </p>
//           <footer className="blockquote-footer" style={{ 
//             color: "#9a7eb0",
//             textAlign: "center",
//             display: "block"
//           }}>
//             Battuwar Eshwar
//           </footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default EducationCard;


import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { FaUniversity, FaSchool, FaBook } from "react-icons/fa";

function EducationCard() {
  return (
    <Card className="quote-card-view" style={{ marginBottom: "30px" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            <span className="purple" style={{ fontSize: "1.3rem" }}>Education Journey</span>
          </p>
          
          <Row style={{ 
            justifyContent: "center",
            alignItems: "stretch",
            padding: "20px 0",
            flexWrap: "wrap"
          }}>
            {/* B.Tech */}
            <Col xs={12} md={4} className="education-item" style={{ 
              padding: "20px",
              border: "1px solid rgba(154, 126, 176, 0.3)",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 3px 10px rgba(154, 126, 176, 0.1)",
              flex: "1 1 300px",
              maxWidth: "350px"
            }}>
              <div style={{ textAlign: "center" }}>
                <FaUniversity style={{ color: "#9a7eb0", fontSize: "2.5rem" }} />
                <h5 style={{ marginTop: "15px", fontWeight: "600" }}>B.Tech CSE</h5>
                <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                  <strong>Lovely Profeesional University</strong>
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  <strong>CGPA:</strong> 6.11/10.0
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  2022 - Present (3rd Year)
                </p>
              </div>
            </Col>

            {/* Intermediate */}
            <Col xs={12} md={4} className="education-item" style={{ 
              padding: "20px",
              border: "1px solid rgba(154, 126, 176, 0.3)",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 3px 10px rgba(154, 126, 176, 0.1)",
              flex: "1 1 300px",
              maxWidth: "350px"
            }}>
              <div style={{ textAlign: "center" }}>
                <FaSchool style={{ color: "#9a7eb0", fontSize: "2.5rem" }} />
                <h5 style={{ marginTop: "15px", fontWeight: "600" }}>Diploma</h5>
                <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                  <strong>Government Polytechnic College</strong>
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  <strong>Percentage:</strong> 71%
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  CSE Stream (2020 - 2023)
                </p>
              </div>
            </Col>

            {/* SSC */}
            <Col xs={12} md={4} className="education-item" style={{ 
              padding: "20px",
              border: "1px solid rgba(154, 126, 176, 0.3)",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 3px 10px rgba(154, 126, 176, 0.1)",
              flex: "1 1 300px",
              maxWidth: "350px"
            }}>
              <div style={{ textAlign: "center" }}>
                <FaBook style={{ color: "#9a7eb0", fontSize: "2.5rem" }} />
                <h5 style={{ marginTop: "15px", fontWeight: "600" }}>SSC</h5>
                <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                  <strong>Zilla Parishad High School</strong>
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  <strong>GPA:</strong> 9.7/10.0
                </p>
                <p style={{ color: "#b8b8b8", fontSize: "0.9rem" }}>
                  Secondary Education (2019 - 2020)
                </p>
              </div>
            </Col>
          </Row>

          <p style={{ 
            color: "rgb(155 126 172)", 
            marginTop: "30px",
            textAlign: "center",
            fontStyle: "italic"
          }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={{ 
            color: "#9a7eb0",
            textAlign: "center",
            display: "block",
            marginTop: "10px"
          }}>
            Dinesh
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;



