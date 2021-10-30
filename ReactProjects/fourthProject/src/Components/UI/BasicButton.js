import { Fragment } from "react";
import './BasicButton.css';

const BasicButton = props => {

const testhandler = event =>{
    console.log(event);
    props.onAddClick(event);
}

    return (
        <Fragment>
            <button className="GenericButton" onClick={testhandler}>{props.label}</button>
        </Fragment>
    )
};

export default BasicButton;