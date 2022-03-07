import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //Mảng đó sẽ được kiểm tra nếu nó = 0 thì sẽ Found no expenses
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {/* Nếu = 0 thì dưới này không thực hiện và ngược lại */}
      {props.items.map((expense) => (
        <ExpenseItem
          //Thêm vào id để tăng hiệu xuất của react
          //How: không cập nhật lại mảng array mà sẽ thêm phần tử đó vào đầu
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
