import './CreateExpense.css';
import {useState} from 'react';

function CreateExpense(props){

    const [enteredName,setEnteredName] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');

    const [isFormValid,setIsFormValid]= useState(true);

    const updateNameHandler = (event) => {
        if(enteredName.trim().length >= 0){
            setIsFormValid(true);
        }
        setEnteredName(event.target.value);
    } ;

    const updateAmountHandler = (event) => {
        setEnteredAmount(event.target.value);

    } ;

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const formSubmitHandler = (event) =>{
        event.preventDefault();

        if(enteredName.trim().length == 0 || enteredAmount.trim().length == 0){
            setIsFormValid(false);
            return;
        }

        const expenseData = {
            Name : enteredName,
            Date : new Date(enteredDate),
            Amount : enteredAmount,
            id : Math.random().toString()
        };
        setEnteredName('');
        setEnteredDate('');
        setEnteredAmount('');
        console.log(expenseData);

        props.onExpenseCreation(expenseData);
    };

    return (
        <form className="formBlock" style={{color : isFormValid ? 'blue' : 'red'}} onSubmit={formSubmitHandler}>
            <div>            
                <label>Expense Name</label>
                <input type="text" onChange={updateNameHandler} value={enteredName}></input>
                </div>
                <div>
            <label>Expense Date</label>
            <input type="date" onChange={dateChangeHandler} value={enteredDate}></input>
            </div>
            <div>
            <label>Expense Amount</label>
            <input type="number" onChange={updateAmountHandler} value={enteredAmount}></input>
            <button onClick={props.onCancelCreation}>Cancel</button>
            <button>Create Expense</button>
            </div>
        </form>
    )
};

export default CreateExpense;