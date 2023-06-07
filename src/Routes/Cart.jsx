import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, changeName } from "../store/userSlice";
import {addCount,decreaseCount } from "../store";
export default function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      <button onClick={()=>{
        dispatch(increase(10))
      }}>버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
            {state.cart.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.count}</td>
                  <td>
                    <button onClick={()=>{
                      dispatch(addCount(a.id))
                    }}>+</button>
                      <button onClick={()=>{
                      dispatch(decreaseCount(a.id))
                    }}>-</button>
                  </td>
                  </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
