import {Fragment} from 'react';
import "./MealItem.css";
import MealItemForm from './MealItem/MealItemForm';


const MealItem = props => {
    return(
        <Fragment>
            <div className="MealRow">
                <span className="MealColumn1">
                <label><h1>{props.meal.Name}</h1></label>
                <label>{props.meal.Description}</label>
                <label>{props.meal.Amount}</label>
                </span>
                <span className="MealColumn2">
                <MealItemForm className="MealItemButton"></MealItemForm>
                </span>

            </div>

            


        </Fragment>
    )
};

export default MealItem;