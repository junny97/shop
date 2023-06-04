import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";
import "./App.css";
import { useState } from "react";
import ListItem from "./Components/ListItem";
import Store from "./Routes/Store";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';



function HeaderStyle() {
  //navigate
  let navigate = useNavigate();
  return (
    <Navbar bg="light" variant="light" style={{}}>
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ paddingRight: "1000px", fontWeight: "800" }}
        >
          KREAM
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => navigate("/")}
            style={{ paddingRight: "30px" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/store")}
            style={{ paddingRight: "30px" }}
          >
            Stores
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/login")}
            style={{ paddingRight: "30px" }}
          >
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function App() {
  let [shoes , setShoes] = useState(data);
  // let [moreShose, setMoreShose] = useState();

  function fetchData() {
    axios.get('https://codingapple1.github.io/shop/data2.json')
    .then((result)=>{
      setShoes()
      let copy = [...shoes,...result.data];
      setShoes(copy);
    })
    .catch(()=>{
      console.log('데이터 전송에 실패했습니다')
    });

  }


  return (
    <div className="App">
      <HeaderStyle />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, index) => {
                    return <ListItem key={index} shoes={shoes[index]} />;
                  })}
                </div>
              </div>
              <button onClick={fetchData}>버튼</button>
             
            </>
          }
        />
        {/* <Route path="/store/:id" element={<Store shoes={shoes} />}/>    */}
        <Route path="/store/" element={<Store shoes={shoes}/>}>
      
        <Route path="/store/:id" element={<Store shoes={shoes} />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
