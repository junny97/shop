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
import Store from './Routes/Store';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function HeaderStyle() {
 
  return(
    <Navbar bg="light" variant="light" style={{}}>
        <Container>
       <Link to="/" className="navbar-brand"> <Navbar.Brand href="#home" style={{paddingRight:'1000px', fontWeight:'800'}}>KREAM</Navbar.Brand></Link>
    <Nav className="me-auto">
    <Link to="/" className="nav-link"> <Nav.Link href="#home" style={{paddingRight:'30px'}}>Home</Nav.Link></Link>
    <Link to="/store" className="nav-link" > <Nav.Link href="#features" style={{paddingRight:'30px'}}>stores</Nav.Link></Link>
    <Link to="/login" className="nav-link">  <Nav.Link href="#pricing" style={{paddingRight:'30px'}}>login</Nav.Link></Link>
    </Nav> 
    </Container>
      </Navbar> 
  )
 
}


function App() {

  let [shoes] = useState(data);


  return (
    <div className="App">
          
           <HeaderStyle />
     
      <Routes>
      <Route path="/" element={
        <>
          <div className='main-bg'>
          </div>
          <div className="container">
        <div className="row">
       {
        shoes.map((a, index)=> {
         return(
          <ListItem shoes={shoes[index]}/>
         )
        })
       }
        </div>
      </div> 
      </>
       } />
      <Route path="/store" element={ <Store /> } />
      <Route path="/login" element={ <div>로그인페이지임</div> } />
    </Routes>
      
    
  
    </div>
  );
}

export default App;
