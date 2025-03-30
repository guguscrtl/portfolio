import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalMail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <a style={{color: "rgb(255, 215, 0)", cursor: "pointer"}} onClick={handleShow}><i className="fa fa-envelope fa-2x"></i></a>

      <Modal show={show} onHide={handleClose} data-bs-theme="dark" className='text-white'>
        <Modal.Header closeButton>
          <Modal.Title>Envoyer un message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formInfosEmail">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Nom" />
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Prénom" />
                <Form.Label>Mail</Form.Label>
                <Form.Control type="email" placeholder="Adresse mail" />
            </Form.Group>   
            <Form.Group className="mb-3" controlId="formEmailSend">
                <Form.Label>Objet</Form.Label>
                <Form.Control type="text" placeholder="Objet" />
                <Form.Label>Mail</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Saisissez le contenu" />
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
    </div>
  );
}

export default ModalMail;