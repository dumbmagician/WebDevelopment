
import CartContext from './CartContext';

const CartProvider = props => {

const addItemToCartHandler = item =>{
    
}

const removeItemToCartHandler = item =>{
    
}

    const cartContext = {
        items : [],
        totalAmount : 0,
        AddCartItem : addItemToCartHandler,
        RemoveCartItem :removeItemToCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;