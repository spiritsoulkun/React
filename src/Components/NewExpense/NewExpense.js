import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  //Đây là cách nhận dữ liệu vào và lưu lại Data (xem kĩ)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Để xác định giao tiếp giữa 2 phần có thành công
    //Chúng ta sẽ xem nó có in ra ở đây không
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* isEditting = false thì !isEditting = true thì chạy cái hàm tiếp theo */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* onSaveExpenseData là biến tự mình đặt */}
      {/* khi click button isEditing = true và lúc đó sẽ chạy hàm dưới */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
