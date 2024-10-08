import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MOHAMMAD DANTRELIYA </span>
            from <span className="purple"> Ahmedabad, India.</span>
            
            <br /> 
            I have completed a B.Sc in Computer Applications and Information Technology from Ganpat University in Mehsana.
            <br />
            <br />
            A part from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Moives
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to create things that leave a lasting impact !"{" "}
          </p>
          <footer className="blockquote-footer">MOHAMMAD</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
