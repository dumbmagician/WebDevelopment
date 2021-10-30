import './CreateExpenseButton.css';


function CreateExpenseButton (props){
    return (
        <div className="ExpenseButton">
            <button onClick={props.onClickCreate}>Create Expense</button>
        </div>
    )
};

export default CreateExpenseButton;