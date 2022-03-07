//Chúng ta thường thấy react-dom nhưng không thấy react
import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  //Và ở nhưng ứng dụng react quá khứ sẽ làm điều này
  //Nó sẽ tự động biến thành JSX như phía dưới
  // return react.createElement(
  //   "div",
  //   {},
  //   react.createElement("h2", {}, "Let's get started!"),
  //   react.createElement(Expenses, { items: expenses })
  // );

  const addExpenseDataHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      {/* Truyền đối số expenses vào */}
      {/* gọi <Expenses/> ở đây */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
