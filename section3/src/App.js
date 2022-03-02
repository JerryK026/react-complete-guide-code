import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// props는 부모에서 자식에게 전달되는 단방향 데이터다.
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 9, 28),
  },
  {
    id: 'e2',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 5, 12),
  },
  { id: 'e3', title: 'Mac', amount: 2000.0, date: new Date(2022, 1, 28) },
  { id: 'e4', title: 'PS5', amount: 1500.0, date: new Date(2022, 2, 25) },
];

// 소문자로 시작하는 elem : HTML. 대문자로 시작하는 elem : 리액트
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
