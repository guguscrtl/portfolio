import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import photoUgo from "../img/photo_ugo-removebg-preview2.png";
import logoMtc from "../img/logo_mcube.png";
import logoTS from "../img/typescript.png";
import logoDjango from "../img/django-icon.svg"
import logoMySQL from "../img/mysql-logo.svg"
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

const text = "Ugo Scotto Lomassese";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-5">
        <div className="cartePresUgo d-flex">
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
            <a href="https://www.linkedin.com/in/ugo-scotto-lomassese-33ab98265/" style={{color: "rgb(255, 215, 0)"}} target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>
            <a href="https://github.com/guguscrtl" target="_blank"><i class="fa fa-github fa-2x" style={{color: "rgb(255, 215, 0)"}}></i></a>
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

        <div class="grilleParcoursUgo">
          <div class="rowParcoursUgo">
            <div class="blocParcoursUgo">
              <div class="titreBlocParcoursUgo">
                2022
              </div>
              <div class="sousTitreBlocUParcoursgo">
                Baccalauréat
              </div>
              <div class="texteBlocParcoursUgo">
                <div>
                  Obtention du baccalauréat
                  <br/>
                  Série: Générale
                  <br/>
                  Spécialités: Mathématiques, Physique-Chimie, SVT
                  <br/>
                  Option: Mathématiques expertes
                  <br/>
                  Mention: Bien
                </div>
              </div>
            </div>

            <div class="blocParcoursUgo">
              <div class="titreBlocParcoursUgo">
                2022-2025
              </div>
              <div class="sousTitreBlocUParcoursgo">
                BUT
              </div>
              <div class="texteBlocParcoursUgo">
                <div>
                  Spécialité: Informatique
                  <br/>
                  Parcours: "Réalisation d'applications"
                  <br/>
                </div>
                <div><button class="btn-sm btn-voir-plus" onClick={handleShow}>Voir plus</button></div>
              </div>
            </div>
            
            <div class="blocParcoursUgo">
              <div class="titreBlocParcoursUgo">
                2023-2024
              </div>
              <div class="sousTitreBlocUParcoursgo">
              eBrigade - TPE
              </div>
              <div class="texteBlocParcoursUgo">
                <div>
                  Alternance
                  <br/>
                  Poste: développeur web fullstack
                  <br/>
                  Langages: HTML, CSS, JS, PHP
                </div>
                <div><button class="btn-sm btn-voir-plus" onClick={handleShow}>Voir plus</button></div>
              </div>
            </div>
            
            <div class="blocParcoursUgo">
              <div class="titreBlocParcoursUgo">
                2024-2025
              </div>
              <div class="sousTitreBlocUParcoursgo">
                CAAS - GE
              </div>
              <div class="texteBlocParcoursUgo">
                <div>
                  Alternance
                  <br/>
                  Poste: Développeur web fullstack
                  <br/>
                  Langages: HTML, CSS, JQuery, PHP, SQL
                </div>
                <div><button class="btn-sm btn-voir-plus" onClick={handleShow}>Voir plus</button></div>
              </div>
            </div>
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
    </div>
  );
};

export default HomePage;
