import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    let year= props.Date.getFullYear();
    let month = props.Date.getMonth();
    let date = props.Date.getDate();
    return (
        <div className="ExpenseItemBlock">
          <ExpenseDate year={year} month={month} date={date}/>

          <div className="NameBlock">
          <h1>{props.Name}</h1>
          </div>
          <div className="AmountBlock">
          <h1>{props.Amount}</h1>
          </div>
          
        </div>
      );
};

export default ExpenseItem;