import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
       <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand style={{borderRight:"none",marginLeft:"-4%",fontWeight:"bold",fontSize:"25px"}}>
            <Link to={'/'} style={{textDecoration:"none",color:"yellow"}}>
          <img src="https://cdn-icons-png.flaticon.com/512/5018/5018543.png" alt="" width={40} className='me-2' />
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header