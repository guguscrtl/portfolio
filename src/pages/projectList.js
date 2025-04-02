import React, { useState } from "react";
import { Button, Modal, Card, Container, Row, Col } from "react-bootstrap";
import logoMtc from "../img/logo_mcube.png";
import logoUnesco from "../img/UNESCO_Logo.png";
import logoebrigade from "../img/ebrigade.png";
import logounyx from "../img/unyx.png";
import logoCAAS from "../img/CAAS.png";
import logoboules from "../img/boules.jpg";
import logobackpackhero from "../img/backpackhero.jpg";
import logomalibank from "../img/malibank.jfif";
import logosemantix from "../img/semantix.png";
import logocentreMed from "../img/centreMed.png";
import logoratioVille from "../img/ratioVille.png";
import logoiBricole from "../img/iBricole.png";
import skillIcons from "./skillIcons";
import toolIcons from "./toolIcons";

const academicProjects = [
    {
      id: 1,
      title: "Projet Make The Cube",
      description: "Développement web d'un site de réservation de salles",
      details: "Ce projet universitaire consistait à concevoir une plateforme de réservation de salles avec un système de gestion des horaires...",
      image: logoMtc, 
      technologies: [skillIcons.TS, skillIcons.Python, skillIcons.SQL],
      year: "2024-2025", 
      languages: ["React", "TS", "Python", "SQL", "Git", "Jira"], 
      skills: ["Réaliser", "Optimiser", "Collaborer"],
    },
    {
      id: 2,
      title: "Projet MCN - Unesco",
      description: "Développement d'un site web de médiation culturel et numérique sur la ville de Tolède",
      details: "En tant que chef de projet, j'ai dirigé une équipe pour la création d'un site web permettant de promouvoir les activités culturelles de Tolède.",
      image: logoUnesco,
      technologies: [skillIcons.HTML, skillIcons.CSS, skillIcons.PHP],
      year: "2022-2023",
      languages: ["HTML", "CSS", "PHP", "SQL"],
      skills: ["Gérer", "Collaborer", "Optimiser"],
    },
    {
      id: 3,
      title: "Développement Jeu Python",
      description: "Développement d'un petit jeu en Python",
      details: "Ce projet en duo consistait à créer un jeu en Python. Nous avons implémenté des mécaniques simples et avons appris à travailler en équipe pour résoudre les problèmes techniques.",
      image: logoboules,
      technologies: [skillIcons.Python],
      year: "2022-2023",
      languages: ["Python"],
      skills: ["Réaliser", "Collaborer"],
    },
    {
      id: 4,
      title: "Refonte Backpack Hero en Java",
      description: "Refonte du jeu 'Backpack Hero' en Java",
      details: "Projet en groupe visant à recréer le jeu Backpack Hero en Java. Nous avons travaillé sur la gestion des objets, de l'inventaire et des interactions dans le jeu.",
      image: logobackpackhero,
      technologies: [skillIcons.Java],
      year: "2023",
      languages: ["Java"],
      skills: ["Réaliser", "Collaborer"],
    },
    {
      id: 5,
      title: "Projet de gestion de transactions bancaires",
      description: "Développement d'un site web de gestion des transactions bancaires",
      details: "Ce projet consistait à créer une plateforme pour gérer les transactions bancaires.",
      image: logomalibank,
      technologies: [skillIcons.HTML, skillIcons.CSS, skillIcons.JS, skillIcons.PHP],
      year: "2023-2024",
      languages: ["HTML", "CSS", "JS", "PHP", "Git"],
      skills: ["Réaliser", "Optimiser", "Collaborer"],
    },
    {
      id: 6,
      title: "Jeu sémantique",
      description: "Développement d'un jeu basé sur la similarité des mots",
      details: "Projet de développement d'un jeu où les joueurs doivent trouver des mots similaires.",
      image: logosemantix,
      technologies: [skillIcons.React, skillIcons.TS, skillIcons.Node, skillIcons.Java, skillIcons.C],
      year: "2023-2024",
      languages: ["React", "TS", "Node.js", "C", "Java", "Node", "Git"],
      skills: ["Réaliser", "Optimiser", "Collaborer"],
    },
    {
      id: 7,
      title: "Apprentissage des modèles de bases de données",
      description: "Apprentissage des modèles conceptuels et logiques de bases de données",
      details: "Ce projet consistait à étudier et à appliquer des modèles de bases de données, y compris les diagrammes MCD et MLD. Nous avons utilisé PHP et Figma pour les visualisations.",
      image: logocentreMed,
      technologies: [skillIcons.PHP, toolIcons.Figma],
      year: "2023",
      languages: ["PHP", "Figma"],
      skills: ["Administrer", "Optimiser"],
    },
    {
      id: 8,
      title: "Activités sportives et événements pour une mairie",
      description: "Mise en avant des activités sportives et événements proposés par une mairie",
      details: "Ce projet consistait à travailler en tant que prestataire pour une mairie en mettant en avant les événements et activités sportives via une plateforme visuelle créée avec Figma.",
      image: logoratioVille,
      technologies: [toolIcons.Figma],
      year: "2023",
      languages: ["Figma"],
      skills: ["Collaborer", "Gérer"],
    },
    {
      id: 9,
      title: "Maquettage d'une application mobile pour aide au bricolage",
      description: "Maquettage d'une application mobile visant à aider les utilisateurs dans leurs projets de bricolage",
      details: "Projet de maquettage d'une application mobile sur Figma, conçue pour guider les utilisateurs dans leurs projets de bricolage.",
      image: logoiBricole,
      technologies: [toolIcons.Figma],
      year: "2023",
      languages: ["Figma"],
      skills: ["Collaborer", "Réaliser"],
    },
  ];
  
  const professionalProjects = [
    {
      id: 1,
      title: "eBrigade",
      description: "Développement d'un ERP pour casernes et hôpitaux",
      details: "Ce projet en entreprise consistait à développer un intranet ERP pour les pompiers et les associations.",
      image: logoebrigade,
      technologies: [skillIcons.HTML, skillIcons.CSS, skillIcons.JS, skillIcons.php, skillIcons.SQL],
      year: "2023-2024",
      languages: ["HTML", "CSS", "JS", "PHP", "SQL", "Git"],
      skills: ["Réaliser", "Optimiser", "Collaborer"],
    },
    {
      id: 2,
      title: "Crédit Agricole Assurances Solutions",
      description: "Développement d'un portail interne sécurisé",
      details: "En alternance, j'ai participé au développement d'un intranet de traitement de documents d'assurances, facilitant la gestion des tâches informatiques au sein du Crédit Agricole.",
      image: logoCAAS,
      technologies: [skillIcons.HTML, skillIcons.CSS, skillIcons.Jquery, skillIcons.php, skillIcons.SQL],
      year: "2024-2025",
      languages: ["HTML", "CSS", "JQuery", "PHP", "SQL"],
      skills: ["Réaliser", "Collaborer", "Gérer"],
    },
    {
      id: 3,
      title: "Développement serveur GTA RP",
      description: "Développement d'un serveur GTA RP",
      details: "Projet personnel de développement d'un serveur de roleplay pour GTA V, avec le langage Lua et en configuration serveur.",
      image: logounyx,
      technologies: [skillIcons.lua],
      year: "2017-2018",
      languages: ["lua", "SQL"],
      skills: ["Réaliser", "Optimiser"],
    },
  ];
  

function ProjectList() {
    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const handleShow = (project) => {
      setSelectedProject(project);
      setShow(true);
    };
  
    const handleClose = () => setShow(false);
  
    return (
      <Container className="mt-5">
        {/* Section Projets Académiques */}
        <h2 className="text-center section-title">Projets Académiques</h2>
        <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {academicProjects.map((project) => (
            <Col key={project.id}>
              <Card className="custom-card h-100" onClick={() => handleShow(project)}>
                <div className="image-container">
                  <Card.Img variant="top" src={project.image} className="project-image" />
                  <span className="year-badge">{project.year}</span>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{project.title}</Card.Title>
                  <div className="skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="badge">{skill}</span>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                <div className="languages">
                  {project.languages.map((language, index) => (
                    <i key={index} className={`devicon ${skillIcons[language] || toolIcons[language]} skill-icon`} />
                  ))}
                </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        {/* Séparateur Visuel */}
        <div className="separator"></div>
  
        {/* Section Projets Professionnels */}
        <h2 className="text-center section-title">Projets Professionnels</h2>
        <Row className="g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {professionalProjects.map((project) => (
            <Col key={project.id}>
              <Card className="custom-card" onClick={() => handleShow(project)}>
                <div className="image-container">
                  <Card.Img variant="top" src={project.image} className="project-image" />
                  <span className="year-badge">{project.year}</span>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <div className="skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="badge">{skill}</span>
                    ))}
                  </div>
                  <Card.Text>{project.description}</Card.Text>
                <div className="languages">
                  {project.languages.map((language, index) => (
                    <i key={index} className={`devicon ${skillIcons[language]} skill-icon`} />
                  ))}
                </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        {/* Modale Bootstrap en dark mode */}
        <Modal show={show} onHide={handleClose} data-bs-theme="dark">
          <Modal.Header closeButton className="modal-header-custom">
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-custom">
            <img src={selectedProject?.image} alt={selectedProject?.title} className="img-fluid mb-3 modal-image" />
            <p className="modal-description">{selectedProject?.details}</p>
            <div className="additional-info">
              <p><strong>Année :</strong> {selectedProject?.year}</p>
              <p><strong>Langages :</strong> 
                {selectedProject?.technologies.map((techno) => (
                  <i key={techno} className={`devicon ${techno} skill-icon`} />
                ))}
              </p>
              <p><strong>Compétences développées :</strong> {selectedProject?.skills.join(', ')}</p>
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-footer-custom">
            <Button variant="secondary" onClick={handleClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
  
        {/* Styles */}
        <style jsx>{`
          .section-title {
            color: rgb(255, 215, 0);
            font-weight: bold;
            margin-bottom: 20px;
          }
          .separator {
            text-align: center;
            font-size: 24px;
            margin: 40px 0;
          }
          .custom-card {
            background: rgba(63, 63, 121, 0.2);
            border: none;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            cursor: pointer;
            color: rgb(255, 215, 0);
            text-align: center;
          }
          .custom-card:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 15px rgba(255, 215, 0, 0.5);
          }
          .image-container {
            position: relative;
          }
          .year-badge {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: rgb(255, 215, 0);
            color: black;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 14px;
          }
          .project-image {
            height: 180px;
            object-fit: contain;
            padding: 10px;
          }
          .skills {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .badge {
            background-color: rgba(63, 63, 121, 0.5);
            color: rgb(255, 215, 0);
            border: none;
            padding: 6px 10px;
            border-radius: 20px;
            font-size: 12px;
          }
          .languages {
            display: flex;
            gap: 8px;
          }
          .skill-icon {
            font-size: 24px;
          }
          .modal-header-custom, .modal-body-custom, .modal-footer-custom {
            background: rgba(63, 63, 121, 0.2);
            color: rgb(255, 215, 0);
          }
          .modal-image {
            max-height: 250px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
          }
          .tech-logo {
            width: 50px;
            height: 50px;
          }
          .modal-description {
            text-align: justify;
            line-height: 1.5;
          }
          .additional-info p {
            margin: 10px 0;
          }
        `}</style>
      </Container>
    );
  }
  
  export default ProjectList;