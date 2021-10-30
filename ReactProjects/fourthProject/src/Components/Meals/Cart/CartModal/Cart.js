import CartItem from '../CartItem/CartItem';
import Modal from '../../../UI/Modal/Modal';

const Cart = props => {
    const mealsList = [
        {
            Name:"Palak Paneer",
            Qty:1,
            Amount:200
        },
        {
            Name:"Dal Makhani",
            Qty:1,
            Amount:250
        },
        {
            Name:"Aloo Gobi",
            Qty:1,
            Amount:100
        }
    ];

    const CartItems = mealsList.map(item =>  { return <CartItem Item={item}/>});

    return (
        <Modal onClick={props.onClick}>
                    {CartItems}
                    <button onClick={props.onClick.bind(null,false)}>Close</button>
                    <button>Order</button>
        </Modal>
    )
}

export default Cart;