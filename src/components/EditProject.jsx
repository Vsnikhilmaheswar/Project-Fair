import React from 'react'
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function EditProject() {

      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    
  return (
   <>
   <i className="fa-solid fa-pen-to-square ms-3 text-danger"   onClick={handleShow}></i>
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-success">EDIT PROJECT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 mt-2">
            <label htmlFor="projectImg">
                <input type="file" id="projectImg" style={{display:'none'}}></input>
                <img src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg" className="img-fluid" />
                </label>    
            </div>
            <div className="col-md-6 ">
                <div className="mt-3">
                      <input type="text" placeholder="Project Title" className="form-control"/>
                </div>
             
                <div className="mt-3">
                      <input type="text" placeholder="Technologies used" className="form-control"/>
                </div>
                <div className="mt-3">
                      <input type="text" placeholder="Github link" className="form-control"/>
                </div>
                <div className="mt-3">
                      <input type="text" placeholder="Live link" className="form-control"/>
                </div>
             
                <div className="mt-3 ">
                      <textarea placeholder="Project overview" rows={4} col={4} className="form-control"></textarea>
                </div>
             
              
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
          UPDATE
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default EditProject