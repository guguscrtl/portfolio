import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

const ModalMail = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleOpen = () => setShow(true);
    window.addEventListener("openMailModal", handleOpen);
    return () => window.removeEventListener("openMailModal", handleOpen);
  }, []);

  const handleClose = () => setShow(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("service_99h671p", "template_3g6catl", e.currentTarget, {
        publicKey: "Wuij-0TCWsDH_CVRC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          handleClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Modal show={show} onHide={handleClose} data-bs-theme="dark" className="text-white">
      <Modal.Header closeButton>
        <Modal.Title>Envoyer un message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Nom" name="user_name" required />
            <Form.Label>Mail</Form.Label>
            <Form.Control type="email" placeholder="Adresse mail" name="user_email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Objet</Form.Label>
            <Form.Control type="text" placeholder="Objet" name="mail_subject" required />
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Saisissez le contenu" name="mail_content" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalMail;
