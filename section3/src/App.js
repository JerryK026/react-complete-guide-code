import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
// 소문자로 시작하는 elem : HTML. 대문자로 시작하는 elem : 리액트
const App = () => {
  // props는 부모에서 자식에게 전달되는 단방향 데이터다.
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 2, 12),
    },
    { id: 'e3', title: 'Mac', amount: 2000.0, date: new Date(2022, 2, 28) },
    { id: 'e4', title: 'PS5', amount: 1500.0, date: new Date(2022, 2, 25) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
