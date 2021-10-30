import './DateFilter.css';

function DateFilter (props){

    const dateFilterHandler = (event) =>{
        console.log(event.target.value);
        props.onDatefilterChange(event.target.value);
    };

    return (
    <div className="datefilter">
        <label><h1>Pick a year!!</h1></label>
        <select className="datedropdown" value={props.initialValue} onChange={dateFilterHandler}>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
        <option>2021</option>
        </select>

    </div>
    );
};

export default DateFilter;