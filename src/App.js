import data from './data';
import './App.css';
import { useEffect, useState } from 'react';
import ListItem from './Components/ListItem';
import Store from './Routes/Store';
import Cart from './Routes/Cart';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HeaderStyle from './Routes/HeaderStyle';

function App() {
  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(1);
  const [limit, setLimit] = useState(false);
  const [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => setFade('end'), 100);
    return () => {
      setFade('');
    };
  }, []);

  function limitAlert() {
    setLimit(!limit);
    alert('더이상 보여줄 상품이 없습니다');
  }

  async function fetchData() {
    if (count >= 3) {
      return limitAlert();
    }
    try {
      const result = await axios.get(
        'https://codingapple1.github.io/shop/data' + (count + 1) + '.json',
      );
      console.log(result.data);
      setShoes((prevShoes) => [...prevShoes, ...result.data]);
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.log('데이터 전송에 실패했습니다', error);
    }
  }

  return (
    <div className={`App start ${fade}`}>
      <HeaderStyle />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, index) => {
                    return <ListItem key={index} shoes={shoes[index]} />;
                  })}
                </div>
              </div>
              <button onClick={fetchData}>상품 더보기</button>
            </>
          }
        />
        {/* <Route path="/store/:id" element={<Store shoes={shoes} />}/>    */}
        <Route path='/store/' element={<Store shoes={shoes} />}>
          <Route path='/store/:id' element={<Store shoes={shoes} />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>보여줄 페이지가 없습니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
