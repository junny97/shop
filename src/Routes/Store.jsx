import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'

export default function Store({ shoes }) {
  const [show, setShow] = useState(true);
 



  let { id } = useParams();
  const findId = id ? shoes.find((x) => x.id == id) : shoes[0];

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
      </div> 
    </>
  )
}


