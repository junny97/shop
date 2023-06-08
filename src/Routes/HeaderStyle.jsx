import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function HeaderStyle() {
  let navigate = useNavigate();
  return (
    <Navbar bg='light' variant='light' style={{}}>
      <Container>
        <Navbar.Brand
          href='#home'
          style={{ paddingRight: '1000px', fontWeight: '800' }}
        >
          KREAM
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link
            onClick={() => navigate('/')}
            style={{ paddingRight: '30px' }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate('/store')}
            style={{ paddingRight: '30px' }}
          >
            Stores
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate('/cart')}
            style={{ paddingRight: '30px' }}
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderStyle;
