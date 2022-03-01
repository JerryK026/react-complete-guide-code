import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* !중요 함수 또한 props로 넘겨 자식에서 함수를 실행시킬 수 있다. 부모 컴포넌트와 소통하는 일종의 방법 */}
      {/* 데이터를 부모 함수로 보내는 패턴이기도 하다. */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
