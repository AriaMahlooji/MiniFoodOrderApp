import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton=(props)=>{

    const cartCTX = useContext(CartContext);
    const [btnClasses, setBtnClasses] = useState(`${classes.button}`);

    useEffect(()=>{
        if (cartCTX.items.length === 0)
            return;

        setBtnClasses(`${classes.button} + ${classes.bump}`);

        const timer = setTimeout(()=>{
            setBtnClasses(`${classes.button}`)
        }, 300)
        
        return(()=>{
            clearTimeout(timer);
        })

    },[cartCTX.items])

    const numberOfCartItems = cartCTX.items.reduce((currentNumber, item)=>{
        return currentNumber + item.amount;
    },0);
    return(
        <button onClick={props.onShowCart} className={btnClasses}>
            <span className={classes.icon}><CartIcon/></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;