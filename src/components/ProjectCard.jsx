import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import mediaplayer from '../assets/mediaplayer.png'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProjectCard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);   
  return (
   <>
 <Card style={{ width: '100%' }} className='shadow rounded-0 border-0 ' onClick={handleShow}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>



     

    </Card>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>MEDIA PLAYER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6} lg={6}>
                <img   src={mediaplayer} className='img-fluid'/>
                </Col>
                <Col md={6} lg={6}>
                 <h5>Description</h5>
                 <p>sasasasda hsdsn cn scn scnd</p>
                 <h5>Technologies</h5>
                 <p>react</p>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
          </Modal.Footer>
          <Modal.Footer>
        <Link to="wwe" target='_blank'>
        <i class="fa-brands fa-github fa-2x me-3"></i>
        </Link>
        <Link>
        <i class="fa-solid fa-link fa-2x "></i>
        </Link>   
         </Modal.Footer>
      </Modal>
   </>
  )
}

export default ProjectCard