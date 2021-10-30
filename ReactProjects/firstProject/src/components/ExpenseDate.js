import './ExpenseDate.css';

function ExpenseDate(props){
    return (
        <div className="dateBlock">
            <div className="year">{props.year}</div>
            <div className="month">{props.month}</div>
            <div className="date">{props.date}</div>
        </div>
    );
};

export default ExpenseDate;