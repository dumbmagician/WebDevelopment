import ExpenseItem from "./ExpenseItem";
import DateFilter from "./DateFilter";
import {useState} from 'react';
import "./Expenses.css";

function Expenses(props) {

const [selectedYear,setSelectedYear] = useState('2021');
console.log(props.expensesList.map(item => item.Date.getFullYear()));
console.log(selectedYear);
const expenseList = props.expensesList.filter((item) => {return item.Date.getFullYear() == selectedYear});

const CaptureDateFilterChangeHandler = (selectedDate) =>{
  console.log(selectedDate);
  setSelectedYear(selectedDate);

};

let finalList = <h1>No expenses found</h1>;
if(expenseList.length>0){
    finalList = expenseList.map(expense => <ExpenseItem Date={expense.Date} Name={expense.Name} Amount={expense.Amount}/>);
}

  //const dateString = date.toISOString();
let expenseArray = props.expensesList;
  return (
     
    <div className="ExpensesBlock">
        <DateFilter initialValue={selectedYear} onDatefilterChange = {CaptureDateFilterChangeHandler}></DateFilter>
      {finalList}
    </div>
  );
}

export default Expenses;
