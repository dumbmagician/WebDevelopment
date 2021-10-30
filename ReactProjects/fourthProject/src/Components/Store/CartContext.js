import React from 'react';

const CartContext = React.createContext(
    {
        items : [],
        totalAmount : 0,
        AddCartItem : (item) => {},
        RemoveCartItem : (id) => {}
    }
);

export default CartContext;