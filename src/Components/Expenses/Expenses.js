import React, { useState } from "react";

import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
//Nằm cùng folder tổng và riêng folder con
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    //Cập nhật năm đã chọn bên ExpenseFilter ở đây
    setFilteredYear(selectedYear);
  };

  //Hàm này để tìm kiếm kiểm tra xem có true hay false
  //nếu năm mình chọn trùng với năm của dữ liệu thì true
  //Và trả lại một mảng có chứa những năm trùng
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* selected để lấy năm mình setup sẵn là 2020 với filteredYear */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* //Và trả lại một mảng có chứa những năm trùng vào expenses*/}
        <ExpensesChart expenses={filteredExpenses} />
        {/* setup dynamic với từng phần tử trong React */}
        {/* //Và trả lại một mảng có chứa những năm trùng items*/}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
