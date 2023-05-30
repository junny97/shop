import React from 'react'
import { useParams } from 'react-router-dom'

export default function Store({shoes}) {

  let {id} = useParams();
  let findId = shoes.find((x) =>{
    return x.id == id;
  })
  
  return (
    <>
      <div className="container">
  <div className="row">
    <div className="col-md-6">
    <img src={findId.img} width="100%" />
    </div>
    {
      
    }
    <div className="col-md-6">
      <h4 className="pt-5">{findId.title}</h4>
      <p>{findId.content}</p>
      <p>{findId.price}</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
    </>
  )
}
