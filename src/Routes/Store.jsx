import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Store({ shoes }) {
  const [show, setShow] = useState(true);

  let { id } = useParams();
  const findId = id ? shoes.find((x) => x.id == id) : shoes[0];
  let [tab, setTab] = useState(0);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={findId.img} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={()=> {
              setTab(0)
            }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={()=>{
            setTab(1)
            }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={()=>{
               setTab(2)
            }}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
          <TabContent tab={tab} />
      </div>
    </>
  );
}

function TabContent({tab}){
  let [fade,setFade] = useState('');

  useEffect(()=>{
    setTimeout(() => setFade('end'), 100)
    return ()=>{
      setFade('');
    }
  },[tab])

  return (
      <div className={`start ${fade}`}>
       { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
       </div>
  )
}
