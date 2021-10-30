import {Fragment} from "react";
import "./Button.css";

function Button(props){
    return(
        <Fragment>
            <button  className="CButton">
                <span className="Qty">{props.title}</span>
               </button>
        </Fragment>
    );
}

export default Button;