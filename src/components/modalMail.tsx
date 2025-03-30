import React, {useRef} from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import emailjs from "@emailjs/browser";

function ModalMail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_99h671p', 'template_3g6catl', form.current, {
        publicKey: 'Wuij-0TCWsDH_CVRC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          handleClose();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
    <a style={{color: "rgb(255, 215, 0)", cursor: "pointer"}} onClick={handleShow}><i className="fa fa-envelope fa-2x"></i></a>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark" className='text-white'>
        <Modal.Header closeButton>
          <Modal.Title>Envoyer un message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formInfosEmail">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Nom" name='user_name'/>
                  <Form.Label>Mail</Form.Label>
                  <Form.Control type="email" placeholder="Adresse mail" name='user_email'/>
              </Form.Group>   
              <Form.Group className="mb-3" controlId="formEmailSend">
                  <Form.Label>Objet</Form.Label>
                  <Form.Control type="text" placeholder="Objet" name='mail_subject'/>
                  <Form.Label>Mail</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Saisissez le contenu" name='mail_content' />
              </Form.Group>
              <Button variant="primary" type="submit">
                  Envoyer
              </Button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMail;