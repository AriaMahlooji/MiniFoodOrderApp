import { useContext, useEffect } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';

const Cart =(props)=>{
    
    const cartCTX = useContext(CartContext);
    const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;

    useEffect(()=>{
    },[cartCTX.items])

    const cartItemRemoveHandler=(id)=>{
        cartCTX.removeItem(id);
    }
    const cartItemAddHandler=(item)=>{
        cartCTX.addItem({...item, amount:1});
    }

    const cartItems =<ul className={classes['cart-items']}>
            {cartCTX.items.map(item=>
            <CartItem 
                id={item.id}
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}>
            </CartItem>)}
    </ul> 

    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div>
                <span>Total Amount: </span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;