import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';
import './App.css';
import { useState } from 'react';
import ListItem from './Components/ListItem';
function App() {

  let [shoes] = useState(data);



  return (
    <div className="App">
     
     <Navbar bg="light" variant="light" style={{}}>
        <Container>
          <Navbar.Brand href="#home" style={{paddingRight:'1000px', fontWeight:'800'}}>KREAM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{paddingRight:'30px'}}>shop</Nav.Link>
            <Nav.Link href="#features" style={{paddingRight:'30px'}}>stores</Nav.Link>
            <Nav.Link href="#pricing" style={{paddingRight:'30px'}}>login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className='main-bg'>
      </div>
      <div className="container">
    <div className="row">
   {
     shoes.map((a, index) => {
      return(
        <ListItem shoes={shoes[index]}  />
      )
     })
   }
    </div>
  </div> 

  
    </div>
  );
}

export default App;
