import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton=(props)=>{
    const cartCTX = useContext(CartContext);
    const numberOfCartItems = cartCTX.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount;
    },0);
    return(
        <button onClick={props.onShowCart} className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;