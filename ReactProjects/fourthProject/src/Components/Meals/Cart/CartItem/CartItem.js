import {Fragment}  from 'react';
import BasicButton from '../../../UI/BasicButton'
const CartItem = props => {

console.log(props.item);

    return(
        <Fragment>
            <div>
                <span>
                <h1>{props.Item.Name}</h1>
                <h2>{props.Item.Amount}</h2>
                <h2>x{props.Item.Qty}</h2>
                </span>
                <span>
                    <BasicButton label='+'/>
                    <BasicButton label='-'/>

                </span>
            </div>


        </Fragment>
    )
}

export default CartItem; 