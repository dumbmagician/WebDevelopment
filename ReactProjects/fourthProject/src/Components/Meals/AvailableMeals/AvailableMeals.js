import { Fragment } from "react";
import "./AvailableMeals.css";
import MealItem from './MealItem';

const AvailableMeals = props => {
const mealsList = [
    {
        Name:"Palak Paneer",
        Description:"Arey Palak Paneer",
        Amount:200
    },
    {
        Name:"Dal Makhani",
        Description:"Arey Dal Makhani",
        Amount:250
    },
    {
        Name:"Aloo Gobi",
        Description:"Arey Aloo Gobi",
        Amount:100
    }
];

const meals = mealsList.map(item => {
    return <div className="MealRow"> <h1>{item.Name}</h1> <h2>{item.Description}</h2> <h2>{item.Amount}</h2> </div> });

    return (
        <Fragment>
            <div className="MealSection">
                {mealsList.map(item => {
                return <MealItem meal={item}></MealItem> })}

            </div>
        </Fragment>
    );
}

export default AvailableMeals;