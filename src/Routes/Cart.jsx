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
          <tr>
            {stock.map((a) => {
              return (
                <>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.count}</td>
                </>
              );
            })}
            {/* <td>1</td>
      <td>안녕</td>
      <td>안녕</td>
      <td>안녕</td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
