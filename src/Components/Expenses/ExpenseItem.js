//Chúng ta tách ExpenseDate sang một file khác để dễ xử lý từng phần
//khi tách chúng ta phải gom chúng lại bằng cách import
import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//một components không được có 2 nguyên tốt gốc
//Các đối số sẽ đưa vào props (properties) và khi chọn nó chúng ta props.đối số đó
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
