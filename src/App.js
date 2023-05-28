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
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function HeaderStyle() {
  //navigate
  let navigate = useNavigate();

  return (
    <Navbar bg="light" variant="light" style={{}}>
      <Container>
        <Navbar.Brand href="#home" style={{ paddingRight: '1000px', fontWeight: '800' }}>
          KREAM
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate('/')} style={{ paddingRight: '30px' }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/store')} style={{ paddingRight: '30px' }}>
            Stores
          </Nav.Link>
          <Nav.Link onClick={() => navigate('/login')} style={{ paddingRight: '30px' }}>
            Login
           
          </Nav.Link>
        </Nav>
      </Container>
    
    </Navbar>
    
  );
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
      <Route path="/login" element={ <div>로그인페이지임 
        <Outlet></Outlet></div> }>
        <Route path='one' element={<h3>아이디를 입력하세요</h3>}></Route>
        <Route path='two' element={<h3>비밀번호를 입력하세요</h3>}></Route>
        </Route>

      {/* <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>멤버임</div>}/>
         <Route path='location' element={<About/>}/>
      </Route> */}
     

    </Routes>
      
  
    </div>
  );
}

function About() {
  return (
    <div>
      {/* <h4>회사 정보임</h4> */}
      <Outlet></Outlet>
    </div>
  )
}


export default App;
