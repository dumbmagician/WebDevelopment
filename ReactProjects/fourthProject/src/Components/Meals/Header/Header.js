
import "./Header.css";

import {Component, Fragment, useContext} from 'react';
import CartButton from "../Cart/CartButton/CartButton";
import CartContext from "../../Store/CartContext";

function Header(props){

    const cartCtx = useContext(CartContext);

    const Qty = cartCtx.items.reduce((current,item) => {return current+item.Amount} , 0);

    return (
        <Fragment>
        <div className="MealHeader">
            <h2>React Meals</h2>
            <CartButton onClick={props.onClick} label={'Your Cart'} title={Qty}/>
        </div>

            <img className="FoodBackground" 
            src="https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=20&m=1218254547&s=170667a&w=0&h=mOEC7x7qU5NC78mCULs-jAPeLkxy8opOvIbGSnwmAyw="
            alt="delicious food"></img>
        </Fragment>
    )
}

export default Header;