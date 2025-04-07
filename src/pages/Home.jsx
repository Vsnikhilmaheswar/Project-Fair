import React from 'react'
import { Col, Row } from 'react-bootstrap'
import coding from '../assets/coding.jpg'
function Home() {
  return (
    <>
    <div className='container-fluid bg-success border p-5 ' style={{width:'100%',height:'100vh'}}>
      <Row className='mt-5'>
        <Col md={6} lg={6} className='d-flex justify-content-center align-items-center flex-column'>
        <div>
            <h3 className='text-light'>Project fair</h3>
            <h6>One stop destination for all s/w projects</h6>
            <button className='btn btn-outline-light mt-3 ms-2'>GET STARTED <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </div>
        </Col>
        
        <Col md={6} lg={6}>
        
        <img className='img-fluid ' src={coding}/>
        </Col>
       
      </Row>
    </div>
    </>
  )
}

export default Home