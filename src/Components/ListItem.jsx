import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function ListItem({ shoes }) {
  const navigate = useNavigate();
  return (
    <div
      className='col-md-4'
      onClick={() => navigate(`/store/${shoes.id}`)}
      style={{ cursor: 'pointer' }}
    >
      <img src={shoes.img} width='80%' />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
    </div>
  );
}
