import { Fragment, useState } from "react";
import BasicButton from "../../../UI/BasicButton";

const MealItemForm = props => {

    const [itemAmount,setItemAmount] = useState(0);

    const AddClickHandler = event =>{
        setItemAmount((previousAmount)=>{
            return previousAmount+1;
        })
    }

    return(
        <Fragment>
            <span>
            <label>Amount</label>
        <input type="number" value={itemAmount}></input>
            </span>

        <BasicButton label={'+ Add'} onAddClick={AddClickHandler} />
        </Fragment>
    )


}

export default MealItemForm;