import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoEcole from "../img/iut.png";

const Footer = () => {
  return (
    <footer className="footer text-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Logo de l'école */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <img src={logoEcole} alt="Logo École" className="logo-ecole" />
          </Col>

          {/* Liens rapides */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <p className="mb-2">© {new Date().getFullYear()} Ugo Scotto Lomassese</p>
            <a href="/mentions-legales" className="text-warning">
              Mentions légales
            </a>
          </Col>

          {/* Icônes réseaux */}
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end gap-3">
            <a href="mailto:ugo@example.com" className="text-warning">
              <i className="fa fa-envelope fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/ugo-scotto-lomassese-33ab98265/" target="_blank" className="text-warning">
              <i className="fa fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/guguscrtl" target="_blank" className="text-warning">
              <i className="fa fa-github fa-2x"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
