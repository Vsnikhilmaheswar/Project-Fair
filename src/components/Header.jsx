import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
<>
<Navbar className="bg-primary">
        <Container>
          
        <Link to={'/'}>  <Navbar.Brand >
          <i class="fa-brands fa-stack-overflow mx-2"></i>
          PROJECT FAIR
          </Navbar.Brand></Link>
          
           <button className='btn btn-warning'><i class="fa-solid fa-right-from-bracket me-2"></i> LOGOUT</button>
        </Container>

       
      </Navbar>
</>
  )
}

export default Header