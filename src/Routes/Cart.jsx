import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increase, changeName } from '../store/userSlice';
import { addCount, decreaseCount } from '../store';
import Button from 'react-bootstrap/Button';
export default function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}의 장바구니
      </h6>
      <Button
        variant='info'
        onClick={() => {
          dispatch(increase(10));
        }}
      >
        정보
      </Button>{' '}
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
                  <Button
                    variant='success'
                    onClick={() => {
                      dispatch(addCount(a.id));
                    }}
                  >
                    +
                  </Button>{' '}
                  <Button
                    variant='danger'
                    onClick={() => {
                      dispatch(decreaseCount(a.id));
                    }}
                  >
                    -
                  </Button>{' '}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
