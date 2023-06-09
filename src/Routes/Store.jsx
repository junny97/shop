import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { addItem } from '../store';
import { useDispatch, useSelector } from 'react-redux';
//실험입니다
export default function Store({ shoes }) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const { id } = useParams();
  const findId = id ? shoes.find((x) => x.id == id) : shoes[0];
  const [tab, setTab] = useState(0);
  const [fade2, setFade2] = useState('');

  useEffect(() => {
    setTimeout(() => setFade2('end'), 150);
    return () => {
      setFade2('');
    };
  }, []);

  return (
    <>
      <div className={`container start ${fade2}`}>
        <div className='row'>
          <div className='col-md-6'>
            <img src={findId.img} width='100%' />
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <button
              className='btn btn-danger'
              onClick={() => {
                dispatch(
                  addItem({ id: findId.id, name: findId.title, count: 1 }),
                );
              }}
            >
              주문하기
            </button>
          </div>
        </div>
        <Nav variant='tabs' defaultActiveKey='link0'>
          <Nav.Item>
            <Nav.Link
              eventKey='link0'
              onClick={() => {
                setTab(0);
              }}
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link1'
              onClick={() => {
                setTab(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link2'
              onClick={() => {
                setTab(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent shoes={shoes} tab={tab} />
      </div>
    </>
  );
}

function TabContent({ tab, shoes }) {
  let [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => setFade('end'), 100);
    return () => {
      setFade('');
    };
  }, [tab]);

  return (
    <div className={`start ${fade} `}>
      {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}
