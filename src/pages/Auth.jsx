import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth() {
  return (
  <>
  <div className='container-fluid ms-5 mt-3 mb-3'>
    <Link to={'/'} style={{textDecoration:'none'}}> 
    <h5 className='text-warning fw-bold'> <i className="fa-solid fa-arrow-left me-3"></i>BACK TO HOME</h5> 

    </Link>
    
   </div>
   <div className='container-fluid bg-light' >
        <Row>
          <Col md={5} className='mb-5 ms-5 mt-5 d-flex justify-content-center align-items-center'>
          <img className='img-fluid'  src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-232.jpg?t=st=1744089271~exp=1744092871~hmac=88a20c8521a20fe96104c71563460fea7cd6631c6c1d69991d0b94b79c3bd36a&w=996' width={"70%"}/>
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
           <h4 className='text-center'>PROJECT FAIR</h4>
           <h5 className='text-center mt-2'>SIGNUP TO YOUR ACCOUNT</h5>
           <div  className=' border-warning w-100 rounded d-flex justify-content-center flex-column  align-items-center'>
            <input className='form-control w-50 rounded mt-3' type='text' placeholder='Enter Name'/>
            <input className='form-control w-50 rounded mt-3' type='text' placeholder='EMAIL ID'/>
            <input className='form-control w-50 rounded mt-3' type='text' placeholder='PASSWORD'/>
         <Link className='w-50 flex mx-auto' to={'/dashboard'}><button className='btn btn-warning mt-3 fw-bold w-50'>REGISTER</button></Link>
           </div>
           <div>
            <p className='mt-2'>Already a User? <span className='' style={{color:'blue'}}> LOGIN</span></p>
           </div>
          </Col>
        </Row>
   </div>
  </>
  )
}

export default Auth