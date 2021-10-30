
import Expenses from "./components/Expenses";
import CreateExpense from "./components/CreateExpense";
import CreateExpenseButton from "./components/CreateExpenseButton";

import {useState} from 'react';

function App() {
  const dateString = new Date();
  const expenseArray = [
    {
      Name: "Grocery",
      Date: dateString,
      Amount: "25",
    },
    {
      Name: "Milk",
      Date: dateString,
      Amount: "50",
    },
    {
      Name: "Travel",
      Date: dateString,
      Amount: "60",
    },
    {
      Name: "Medical",
      Date: dateString,
      Amount: "70",
    },
  ];

const [expenseList,setExpenseList] = useState(expenseArray);

const ExpenseCreatedHandler = (expenseItem) =>{
console.log(expenseItem);

const expenses = (prevExpense)=> { return [
  ...prevExpense,
  expenseItem
]};
console.log(expenses);
setExpenseList(expenses);

};

const [showCreateExpense,setShowCreateExpense] = useState(false);

const showCreateExpenseHandler = () => {
  setShowCreateExpense(true);
};

const disableCreateExpenseHandler = () =>{
  setShowCreateExpense(false);
};

  return (
    <div>
      {showCreateExpense ? <CreateExpense onCancelCreation={disableCreateExpenseHandler} onExpenseCreation={ExpenseCreatedHandler}></CreateExpense> : <CreateExpenseButton onClickCreate={showCreateExpenseHandler}/>}
      <Expenses expensesList={expenseList}></Expenses>
    </div>
  );
}

export default App;
