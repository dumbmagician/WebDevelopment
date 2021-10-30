import {Fragment} from "react";
import "./CartButton.css";

function CartButton(props){
    return(
        <Fragment>
            <button onClick={props.onClick.bind(null,true)}  className="CButton">
                <span>{props.label}</span>
                <span className="Qty">{props.title}</span>
               </button>
        </Fragment>
    );
}

export default CartButton;