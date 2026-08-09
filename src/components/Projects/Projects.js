import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Snake from "../../Assets/Projects/Snake.jpg";
import face from "../../Assets/Projects/face-removebg-preview.png";
import bakery from "../../Assets/Projects/bakery-order-management-software.png"
import Agent from "../../Assets/Projects/Voice Agent.png"
import Resume from "../../Assets/Projects/Smart AI Resume Analyzer.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="This project is a Face Recognition Attendance System developed using Python Flask.
              It allows users to perform various functions related to attendance management,
              including taking attendance using face recognition, viewing attendance records by date, 
              sending automatic emails to parents for absent students, 
              and searching attendance records for the last one month."
              ghLink="https://github.com/mhmd1702/Face_Recognization_and_Attandence_System-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snake}
              isBlog={false}
              title="Blockade Game"
              description="Developed an advanced Python-based Blockade Game using sophisticated algorithms for optimized gameplay. The game features a simplified and intuitive interface, making it accessible for all players. Key gameplay mechanics are automated through accurate event handling, ensuring smooth and responsive player experiences. Additionally, real-time notifications are implemented to highlight achievements, enhancing player engagement and retention. "
              ghLink="https://github.com/mhmd1702/Blockade"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bakery}
              isBlog={false}
              title="Bakery Order Management System"
              description="The Bakery Order Management System is a simple yet effective tool designed to help bakeries manage their customer orders. This system leverages Python and the Pandas library to maintain and handle a list of orders, including details such as customer names, ordered items, quantities, and order dates. It also provides functionality to save the order data to an Excel file for easy tracking and reporting."
              ghLink="https://github.com/mhmd1702/Bakery_Order_Management_System--python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agent}
              isBlog={false}
              title="Smart Voice AI Agent"
              description="An AI-powered voice agent designed to interact with users through natural conversations, understand their requirements, access real-time data, and automate appointment booking. The agent uses conversational memory and intelligent decision-making to handle the complete booking process without manual intervention.

                 The system is built with n8n workflow automation, AI voice technologies, APIs, and real-time data integration, enabling businesses to automate customer interactions and appointment management 24/7."
              ghLink="https://github.com/mhmd1702"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Smart AI Resume Analyzer"
              description="An AI-powered resume analysis platform that helps job seekers create, evaluate, and improve their resumes. The system analyzes resumes against job descriptions, provides an ATS score, identifies missing skills and keywords, and offers personalized suggestions to improve job matching.

The platform also includes **AI-powered resume building, job search, and interview preparation** features to help candidates improve their overall job application process.
"
              ghLink="https://github.com/mhmd1702"
            />
          </Col>

          

          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
