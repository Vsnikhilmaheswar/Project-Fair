import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<>
<Navbar className="bg-primary">
        <Container>
          
          <Navbar.Brand href="#home">
          <i class="fa-brands fa-stack-overflow mx-2"></i>
          PROJECT FAIR
          </Navbar.Brand>
          
           <button className='btn btn-warning'><i class="fa-solid fa-right-from-bracket me-2"></i> LOGOUT</button>
        </Container>

       
      </Navbar>
</>
  )
}

export default Header