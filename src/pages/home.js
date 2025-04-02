import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import photoUgo from "../img/photo_ugo-removebg-preview2.png";
import 'font-awesome/css/font-awesome.min.css';
import ModalMail from "../components/modalMail.tsx";
import { Modal, Button } from "react-bootstrap";
import cv_en from "../pages/CV_Ugo_Scotto_Lomassese_En.pdf";
import cv_fr from "../pages/CV_2025-03-07_Ugo_Scotto_Lomassese.pdf";
import en_icone from "./icones/royaume-uni.png";
import fr_icone from "./icones/france.png";
import Skills from "./Skills.js";
import ScrollLinked from "./scrollLinked.js";
import ProjectList from "./projectList.js";
import Footer from "./footer.tsx";

const text = "Ugo Scotto Lomassese";

const HomePage = () => {

  const parcours = [
    {
      id: 1,
      year: "2022",
      title: "Baccalauréat",
      description: (
        <>
          Obtention du baccalauréat<br />
          Série: Générale<br />
          Spécialités: Mathématiques, Physique-Chimie, SVT<br />
          Option: Mathématiques expertes<br />
          Mention: Bien
        </>
      ),
      details: "",
    },
    {
      id: 2,
      year: "2022-2025",
      title: "BUT Informatique",
      description: (
        <>
          Spécialité: Informatique<br />
          Parcours: "Réalisation d'applications"
        </>
      ),
      details: "Le BUT Informatique m'a permis d’acquérir des compétences en développement logiciel, gestion de projet...",
    },
    {
      id: 3,
      year: "2023-2024",
      title: "eBrigade - TPE",
      description: (
        <>
          Alternance<br />
          Poste: Développeur web fullstack<br />
          Langages: HTML, CSS, JS, PHP
        </>
      ),
      details: "Au sein de eBrigade, j’ai travaillé sur le développement d’un ERP destiné aux pompiers...",
    },
    {
      id: 4,
      year: "2024-2025",
      title: "CAAS - GE",
      description: (
        <>
          Alternance<br />
          Poste: Développeur web fullstack<br />
          Langages: HTML, CSS, JQuery, PHP, SQL
        </>
      ),
      details: "Chez CAAS, je développe une plateforme intranet optimisant la gestion des documents d'assurance...",
    },
  ];
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openMailModal = () => {
    window.dispatchEvent(new Event("openMailModal"));
  };
  return (
    <div style={{ backgroundColor: "#0a1931", color: "#FFD700", minHeight: "100vh" }}>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      {/* Navigation Bar */}
      <nav className="navbarCustom sticky-top navbar navbar-expand-lg navbar-dark">
      <ScrollLinked/>
        <div className="container">
          <a className="navbar-brand" href="#">Mon Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">À propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projets</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={openMailModal} style={{cursor: "pointer"}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5">
        <div className="cartePresUgo d-flex flex-column flex-md-row align-items-center">
          <div className="textPresUgo">
          <motion.h1
            className="titrePresUgo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
          {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <p>Bienvenue sur mon portfolio !</p>
          <p style={{textAlign: "justify"}}>Etudiant en troisième année de BUT Informatique en alternance à Champs-sur-Marne, spécialisé en développement web. Passionné par la technologie et la cybersécurité, je conçois des applications performantes et sécurisées. Basé en région parisienne, j’ai 20 ans et je suis toujours à la recherche de nouveaux défis pour affiner mes compétences.</p>
          <p style={{textAlign: "justify"}}>Pour en savoir plus :</p>
          <div style={{display: "flex", gap: "10px"}}>
            <a href="https://www.linkedin.com/in/ugo-scotto-lomassese-33ab98265/" style={{color: "rgb(255, 215, 0)"}} target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/guguscrtl" target="_blank"><i className="fa fa-github fa-2x" style={{color: "rgb(255, 215, 0)"}}></i></a>
            <a style={{color: "rgb(255, 215, 0)", cursor: "pointer"}} onClick={openMailModal}><i className="fa fa-envelope fa-2x"></i></a>
            <ModalMail/>  
          </div>
          </div>
          <img className="imgPresUgo" src={photoUgo}/>
        </div>
      </header>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>aaa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>aa</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>

      {/* About Section */}
      <section id="about" className="container py-5">
        <h2 className="text-center">Mon parcours</h2>
        <p className="text-center">
          Je suis un développeur spécialisé en cybersécurité et développement web, avec un fort intérêt pour les systèmes sécurisés et la performance des applications.
        </p>

        <div className="grilleParcoursUgo">
          <div className="rowParcoursUgo d-flex flex-column flex-md-row align-items-center">
          {parcours.map((item) => (
        <div key={item.id} className="">
          <div className="blocParcoursUgo p-3 ">
            <div className="titreBlocParcoursUgo">{item.year}</div>
            <div className="sousTitreBlocParcoursUgo">{item.title}</div>
            <div className="texteBlocParcoursUgo">
              <div>{item.description}</div>
              <div>
              {item.details!=="" && (
                <div>
                  <button
                    className="btn-sm btn-voir-plus mt-2"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal-${item.id}`}
                  >
                    Voir plus
                  </button>
                </div>
              )}
              </div>
            </div>
          </div>

          {/* Modal Bootstrap */}
          <div
            className="modal fade"
            id={`modal-${item.id}`}
            tabIndex={-1}
            aria-labelledby={`modalLabel-${item.id}`}
            aria-hidden="true"
            data-bs-theme="dark"
          >
            <div className="modal-dialog">
              <div className="modal-content bg-dark text-light">
                <div className="modal-header border-secondary">
                  <h5 className="modal-title" id={`modalLabel-${item.id}`}>
                    {item.title} - {item.year}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{item.details}</div>
                <div className="modal-footer border-secondary">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
          </div>

          <div className="monCV">
            <h2 className="text-center">Mon CV</h2>
            <p className="text-center">
             Découvrez mon CV dans lequel je présente mon parcours et mes projets.
            </p>
            <div className="text-center d-flex flex-column gap-2 mt-2">
              <a href={cv_en} download="CV_Ugo_Scotto_Lomassese_En.pdf">
                <Button className="btn btn-primary"> <img src={en_icone} style={{width: "20px", height: "20px", margin: "2px"}}/>Download</Button>
              </a>
              <a href={cv_fr} download="CV_2025-03-07_Ugo_Scotto_Lomassese.pdf">
                <Button className="btn btn-primary"><img src={fr_icone} style={{width: "20px", height: "20px", margin: "2px"}}/>Télécharger</Button>
              </a>
              <a href={cv_fr} target="_blank">
              <Button variant="outline-primary">Voir</Button>
              </a>
            </div>
          </div>

          <div className="hardSkills">
            <h2 className="text-center">Hard skills</h2>
              <p className="text-center">
                Le BUT Informatique m'a permis de me former à de multiples outils et langages de programmation que j'ai pu approfondir lors de mes expérience en entreprise.
              </p>
          </div>
          <Skills/>
        </div>
        <div id="projects">
          <ProjectList/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
