import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function Cart() {
  let stock = useSelector((state) => state.stock);
  console.log(stock);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
        
            {stock.map((a) => {
              return (
                <tr>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.count}</td>
                  </tr>
              );
            })}
          
        </tbody>
      </Table>
    </div>
  );
}
